import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {

  //const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();


  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function resetForm() {
    setPassword('');
    setEmail('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !email) {
      return
    }
    resetForm();
    onLogin({ password, email });
  }

  return (
    <div className="login">
      <h3 className="login__heading">Вход</h3>

      {/* <p className="login__error">{message}</p> */}

      <form onSubmit={handleSubmit} className="login-form">
        <fieldset className="login-form__fieldset">

          <label htmlFor="email" className="login-form__field">
            <input
              className="login-form__text"
              required
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Электронный адрес" />
          </label>

          <label htmlFor="password" className="login-form__field">
            <input
              className="login-form__text"
              required
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Пароль" />
          </label>

        </fieldset>

        <button type="submit" className="login-form__btn">Войти</button>

      </form>

    </div>
  );
}

export default Login;
