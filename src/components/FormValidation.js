import { useState, useEffect } from 'react';

const FormValidation = () => {

  // const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
  // const result = pattern.test(email);

  const [values, setValues] = useState({ email: '', password: '' });
  const [isErrors, setIsErrors] = useState({ email: false, password: false });
  const [errorsMessage, setErrorsMessage] = useState({ email: '', password: '' });
  const [isFormNotValid, setIsFormNotValid] = useState(false);

  function handleChange(e) {

    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));

    setIsErrors((isErrors) => ({ ...isErrors, [e.target.name]: !e.target.validity.valid }));

    if (!e.target.validity.valid) {
      setErrorsMessage({ ...errorsMessage, [e.target.name]: e.target.validationMessage })
    } else {
      setErrorsMessage({ ...errorsMessage, [e.target.name]: '' })
    }
  }

  useEffect(() => {

    // console.log(isErrors.email)
    // console.log(isErrors.password)
    // console.log(isErrors.email || isErrors.password)

    setIsFormNotValid(isErrors.email || isErrors.password);
  }, [isErrors.email, isErrors.password])

  return {
    values,
    isErrors,
    errorsMessage,
    isFormNotValid,
    setValues,
    handleChange
  };
}

export default FormValidation;
