import React from 'react';
import { Link } from 'react-router-dom';
import './UserInfo.css';

function UserInfo({children, linkText, btnText, path, onSubmit, onLinkClick}) {
  const [email, setEmail] = React.useState('UserInfo');
  const [password, setPassword] = React.useState('');
  const [saveButtonEnabled, setSaveButtonEnabled] = React.useState(true);

  function handleSubmit(e) {
      onSubmit(email, password);
  }

  return (
    <>
      <fieldset className="userInfo__input">
        <label className="userInfo__input_title">Email</label>
        <input id="email" type="email" name="Email" placeholder="Введите почту" className="userInfo__info" required onChange={e => setEmail(e.target.value)}/>
      </fieldset>
      <fieldset className="userInfo__input">
        <label className="userInfo__input_title">Пароль</label>
        <input id="password" type="password" name="Password" placeholder="Введите пароль" className="userInfo__info" required onChange={e => setPassword(e.target.value)}/>
      </fieldset>
      {children}
      <button type="submit" className={`userInfo__button ${saveButtonEnabled && 'userInfo__button_active'}`} disabled={!saveButtonEnabled} onClick={handleSubmit}>{btnText}</button>
      <div className="userInfo__infoRegister">
        <p className="userInfo__infoRegiste_text">или</p>
        <Link to={path} className="userInfo__infoRegister_link" onClick={onLinkClick}>{linkText}</Link>
      </div>
    </>
  );
}

export default UserInfo;