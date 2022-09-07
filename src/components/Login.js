import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ onLogin }) => {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (values) => {
    onLogin(values);
    reset();
  }

  return (
    <div className="login">
      <h3 className="login__heading">Вход</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <fieldset className="login-form__fieldset">

          <label htmlFor="email" className="login-form__field">
            <input
              {...register('email', {
                required: "Поле обязательно к заполнению.",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Почта введена некорректно'
                }

              })}
              className="login-form__input"

              id="email"
              type="email"
              placeholder="Электронный адрес" />

            <span className="login-form__text_type_error">{errors.email && errors.email.message}</span>

          </label>


          <label htmlFor="password" className="login-form__field">
            <input
              className="login-form__input"
              {...register('password', {
                required: "Поле обязательно к заполнению.",
                minLength: {
                  value: 5,
                  message: "Минимальная длина пароля 5 символов."
                }
              })}
              id="password"
              type="password"
              placeholder="Пароль" />

            <span className="login-form__text_type_error">{errors.password && errors.password.message}</span>
          </label>


        </fieldset>

        <button
          type="submit"
          className={`login-form__btn ${!isValid ? "login-form__btn_disabled" : ''}`}
          disabled={!isValid} >Войти</button>

      </form>
    </div>
  );
}

export default Login;
