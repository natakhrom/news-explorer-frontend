import React from 'react';
import { Link } from 'react-router-dom';
import './UserInfo.css';

function UserInfo({children, linkText, btnText, path, values, handleChange, errors, isValid, onLinkClick}) {
  return (
    <>
      <fieldset className="userInfo__input">
        <label className="userInfo__input_title">Email</label>
        <input id="email" type="email" name="Email" placeholder="Введите почту" className="userInfo__info" required value={values.email} onChange={handleChange}/>
      </fieldset>
      <span className={`${errors.Email ? 'userInfo__inputError' : 'userInfo__inputError_hidden'}`}>Неправильный формат email</span>
      <fieldset className="userInfo__input">
        <label className="userInfo__input_title">Пароль</label>
        <input id="password" type="password" name="Password" placeholder="Введите пароль" className="userInfo__info" required value={values.password} onChange={handleChange}/>
      </fieldset>
      <span className={`${errors.Password ? 'userInfo__inputError' : 'userInfo__inputError_hidden'}`}>Поле должно быть заполнено</span>
      {children}
      <button type="submit" className={`userInfo__button ${isValid && 'userInfo__button_active'}`} disabled={!isValid}>{btnText}</button>
      <div className="userInfo__infoRegister">
        <p className="userInfo__infoRegiste_text">или</p>
        <Link to={path} className="userInfo__infoRegister_link" onClick={onLinkClick}>{linkText}</Link>
      </div>
    </>
  );
}

export default UserInfo;