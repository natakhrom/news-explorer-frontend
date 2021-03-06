import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({name, title, onSubmit, children, isOpen, onClose}) {
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.removeEventListener("keydown", handleEsc);
      };
    }
  }, [isOpen]);

  function handleEsc(e) {
    if (e.keyCode === 27) {
      onClose();
    }
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit('PopupWithForm', '');
  }

  return (
    // <section className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
    <section className={`popup ${isOpen && 'popup_opened'}`} onClick={handleOverlayClick}>
      <form className="popup__container" name={`${name}`} method="POST" action="#" noValidate onSubmit={handleSubmit}>
        <h2 className="popup__heading">{title}</h2>
        {children}
        <button type="button" aria-label="кнопка Закрыть"
        className="popup__close-icon" onClick={onClose}></button>
      </form>
    </section>
  );
}

export default PopupWithForm;