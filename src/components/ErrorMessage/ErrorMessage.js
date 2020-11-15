import React from 'react';
import './ErrorMessage.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function ErrorMessage({isOpen, error, onClose}) {
  return (
    <PopupWithForm name='' title={error} isOpen={isOpen} onSubmit={() => {}} onClose={onClose}/>
  );
}

export default ErrorMessage;