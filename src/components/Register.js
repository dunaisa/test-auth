import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = ({ onRegister }) => {

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
    onRegister(values);
    reset();
  }

  return (
    <div className="register">
      <h3 className="register__heading">Регистрация</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <fieldset className="register-form__fieldset">

          <label htmlFor="email" className="register-form__field">
            <input
              {...register('email', {
                required: "Поле обязательно к заполнению.",
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Почта введена некорректно'
                }

              })}
              className="register-form__input"

              id="email"
              type="email"
              placeholder="Электронный адрес" />

            <span className="register-form__text_type_error">{errors.email && errors.email.message}</span>

          </label>


          <label htmlFor="password" className="register-form__field">
            <input
              className="register-form__input"
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

            <span className="register-form__text_type_error">{errors.password && errors.password.message}</span>
          </label>


        </fieldset>

        <button
          type="submit"
          className={`register-form__btn ${!isValid ? "register-form__btn_disabled" : ''}`}
          disabled={!isValid}>Зарегистрироваться</button>

      </form>

      <div className="register__signin">
        <span className="register__signin register__signin_text">Уже зарегистрированы?
        </span>
        <Link to="/sign-in" className="register__signin register__signin_link">Войти</Link>
      </div>
    </div>
  );
}

export default Register;
