import React from 'react';
import { Link } from 'react-router-dom';
import './InfoTooltip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip({isOpen, path, onClose, onLinkClick}) {
  function handleLinkClick() {
    onLinkClick();
  }

  return (
    <PopupWithForm name="infoTooltip" title="Пользователь успешно зарегистрирован!" isOpen={isOpen} onClose={onClose}>
      <Link to={path} className="infoTooltip__link" onClick={handleLinkClick}>Войти</Link>
    </PopupWithForm>
  );
}

export default InfoTooltip;