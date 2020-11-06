import React from 'react';
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import UserInfo from '../UserInfo/UserInfo';

function Login({isOpen, onClose, onLogin, regPath, onLinkClick}) {
  function onSubmit(email, password) {
    console.log("Login onSubmit", email);
    onLogin();
  }

  return (
    <PopupWithForm name="login" title="Вход" isOpen={isOpen} onClose={onClose} onSubmit={onSubmit}>
      <UserInfo btnText="Войти" linkText="Зарегистрироваться" onSubmit={onSubmit} onLinkClick={onLinkClick} path={regPath}/>
    </PopupWithForm>
  );
}

export default Login;