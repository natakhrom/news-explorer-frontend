import React from 'react';
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import UserInfo from '../UserInfo/UserInfo';
import { useFormWithValidation } from '../FormValidation/FromValidation'

function Login({isOpen, onClose, onSignin, regPath, onLinkClick}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation(onValidate);

  function onValidate(event) {
    const target = event.target;
    
    return target.closest("form").checkValidity();
  }

  function onSubmit() {
    if (!isValid) {
      return;
    }

    onSignin(values.Email, values.Password);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <PopupWithForm name="login" title="Вход" isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
      <UserInfo btnText="Войти" linkText="Зарегистрироваться" values={values} handleChange={handleChange} errors={errors} isValid={isValid} onLinkClick={onLinkClick} path={regPath}/>
    </PopupWithForm>
  );
}

export default Login;