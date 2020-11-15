import React from "react";
import "./Register.css";
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import UserInfo from '../UserInfo/UserInfo';
import { useFormWithValidation } from '../FormValidation/FromValidation'

function Register({isOpen, userAlreadyExists, logPath, onResetUserAlreadyExists, onClose, onSignup, onLinkClick}) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation(onValidate);

  function onValidate(event) {
    const target = event.target;
    onResetUserAlreadyExists();

    return target.closest("form").checkValidity();
  }

  function onSubmit() {
    if (!isValid) {
      return;
    }

    onSignup(values.Email, values.Password, values.Name);
  }

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
  <PopupWithForm name="register" title="Регистрация" isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
    <UserInfo btnText="Зарегистрироваться" linkText="Войти" values={values} handleChange={handleChange} errors={errors} isValid={isValid} onLinkClick={onLinkClick} path={logPath}>
      <fieldset className="userInfo__input">
        <label className="userInfo__input_title">Имя</label>
        <input id="name" type="text" name="Name" placeholder="Введите своё имя" className="userInfo__info" required minLength="2" maxLength="30" value={values.name} onChange={handleChange}/>
      </fieldset>
      <span className={`${errors.Name ? 'userInfo__inputError' : 'userInfo__inputError_hidden'}`}>Имя пользователя должно содержать от 2 до 30 символов</span>
      <span className={`${userAlreadyExists ? 'userInfo__inputError' : 'userInfo__inputError_hidden'}`}>Такой пользователь уже есть</span>
    </UserInfo>
  </PopupWithForm>
  );
}

export default Register;