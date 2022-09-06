import React from 'react';
import FormValidation from './FormValidation';

const Login = ({ onLogin }) => {

  const {
    values,
    isErrors,
    errorsMessage,
    isFormNotValid,
    setValues,
    handleChange
  } = FormValidation();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // //Стейты для вадидации

  // const [inputError, setInputError] = useState(false);
  // const [inputMessage, setInputMessage] = useState(false);

  // function handleEmailChange(e) {
  //   setEmail(e.target.value)
  // }

  // function handlePasswordChange(e) {
  //   setPassword(e.target.value)
  // }  

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!password || !email) {
  //     return
  //   }
  //   resetForm();
  //   onLogin({ password, email });
  // }

  // React.useEffect(() => {
  //   console.dir(isErrors)
  //   console.dir(isFormNotValid)
  //   console.dir(setValues)
  //   console.dir(handleChange)
  // }, [values]);

  function resetForm() {
    setValues(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetForm();
    onLogin(values);
  }

  return (
    <div className="login">
      <h3 className="login__heading">Вход</h3>

      <form onSubmit={handleSubmit} className="login-form">
        <fieldset className="login-form__fieldset">

          <label htmlFor="email" className="login-form__field">
            <input
              className={`login-form__input ${isErrors.email ? "login-form__input_type_error" : ""}`}
              required
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Электронный адрес" />

            <span className={`login-form__text ${isErrors.email ? "login-form__text_type_error" : ""}`}>{errorsMessage.email}</span>
          </label>


          <label htmlFor="password" className="login-form__field">
            <input
              className={`login-form__input ${isErrors.password ? "login-form__input_error_active" : ""}`}
              required
              id="password"
              name="password"
              type="password"
              minLength="5"
              maxLength="15"
              value={values.password}
              onChange={handleChange}
              placeholder="Пароль" />

            <span className={`login-form__text ${isErrors.password ? "login-form__text_type_error" : ""}`}>{errorsMessage.password}</span>
          </label>


        </fieldset>

        <button
          type="submit"
          className={`login-form__btn ${!isFormNotValid ? "login-form__btn_disabled" : ""}`}
          disabled={isFormNotValid}>Войти</button>

      </form>

    </div >
  );
}

export default Login;
