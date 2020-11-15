import React from 'react';
import './PopupWithBurgerMenu.css';
import Navigation from '../Navigation/Navigation';

function PopupWithBurgerMenu({isAuthenticated, isOpen, onLogin, onLogout}) {
  return (
    <section className={`popupBurger ${isOpen && 'popupBurger_opened'}`}>
      <div className="popupBurger__menu">
        <Navigation isColumn={true} onLogin={onLogin} onLogout={onLogout}/>
      </div>
    </section>
  );
}

export default PopupWithBurgerMenu;