import React from 'react';
import { Route, Switch, Redirect, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProtectedRoute from './ProtectedRoute';

import '../index.css';
import Header from './Header';
// импортируем компоненты приложения
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import List from './List.js';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  function handleOnRegister({ password, email }) {
    if ({ password, email }) {
      localStorage.setItem('email', `${email}`);
      localStorage.setItem('password', `${password}`);
      history.push('/sign-in');
    }
  }

  function handleOnLogin({ password, email }) {
    const jwtEmail = localStorage.getItem('email', `${email}`);
    const jwtPassword = localStorage.getItem('password', `${password}`);

    localStorage.setItem('currentemail', `${email}`);
    localStorage.setItem('currentpassword', `${password}`);

    const currentjwtEmail = localStorage.getItem('currentemail', `${email}`);
    const currentjwtPassword = localStorage.getItem('currentpassword', `${password}`);

    if (jwtEmail === currentjwtEmail && jwtPassword === currentjwtPassword) {

      setLoggedIn(true);
      history.push('/');

    } else {
      localStorage.removeItem('currentemail');
      localStorage.removeItem('currentpassword');
      return alert('Что-то пошло не так!')
    }
  }

  function signOut() {
    localStorage.removeItem('currentemail');
    localStorage.removeItem('currentpassword');
    setLoggedIn(false);
    history.push('/sign-in');
  }

  //Проверка на совпадение текущего токена с отправленным ранее при длит нахождении на стр

  useEffect(() => {
    tokenCheck()
  }, [loggedIn])

  function tokenCheck(email) {
    // если у пользователя есть текущая почта в localStorage
    const currentjwtEmail = localStorage.getItem('currentemail', `${email}`);
    const jwtEmail = localStorage.getItem('email', `${email}`);

    if (currentjwtEmail === jwtEmail) {
      setLoggedIn(true);
      history.push('/');
    } else {
      localStorage.removeItem('currentemail');
      localStorage.removeItem('currentpassword');
      history.push('/sign-in');
    }
  }

  return (
    <>
      {loggedIn ?
        <Header>
          <button className="header__logOutBtn" onClick={signOut}>Выйти</button>

        </Header> : ''}

      <Switch>

        <Route exact path="/sign-in">
          <Header>
            <Link className="header__link" to="/sign-up">Регистрация</Link>
          </Header>
          <Login onLogin={handleOnLogin} />
        </Route>

        <Route exact path="/sign-up">
          <Header>
            <Link className="header__link" to="/sign-in">Войти</Link>
          </Header>
          <Register onRegister={handleOnRegister} />
        </Route>

        <ProtectedRoute
          exact path="/"
          loggedIn={loggedIn}
          component={Profile} />

        <ProtectedRoute
          exact path="/list"
          loggedIn={loggedIn}
          component={List} />

        <Route exact path="*">
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-up" />}
        </Route>
      </Switch>
    </>

  );
}


export default App;
