import React from 'react';
import './PopupWithBurgerMenu.css';
import Navigation from '../Navigation/Navigation';

function PopupWithBurgerMenu({isAuthenticated, isOpen, userName, onAuthClick}) {
  return (
    <section className={`popupBurger ${isOpen && 'popupBurger_opened'}`}>
      <div className="popupBurger__menu">
        <Navigation isColumn={true} isAuthenticated={isAuthenticated} userName={userName} onAuthClick={onAuthClick}/>
      </div>
    </section>
  );
}

export default PopupWithBurgerMenu;