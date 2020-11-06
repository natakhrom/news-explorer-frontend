import React from "react";
import "./Register.css";
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import UserInfo from '../UserInfo/UserInfo';

function Register({isOpen, onClose, onRegister, logPath, onLinkClick}) {
  function onSubmit() {
    onRegister();
  }

  return (
    <PopupWithForm name="register" title="Регистрация" isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
      <UserInfo btnText="Зарегистрироваться" linkText="Войти" path={logPath} onSubmit={onSubmit} onLinkClick={onLinkClick}>
        <fieldset className="userInfo__input">
          <label className="userInfo__input_title">Имя</label>
          <input id="name" type="text" name="name" placeholder="Введите своё имя" className="userInfo__info" required/>
      </fieldset>
    </UserInfo>
  </PopupWithForm>
  );
}

export default Register;