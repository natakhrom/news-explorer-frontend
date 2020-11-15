import React, { useState } from 'react';
import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({colorSchemaBlack, onLogin, onLogout, onShowPopupMenu}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!isMenuOpen);
    onShowPopupMenu(!isMenuOpen);
  };

  return (
    <header className={`header ${!isMenuOpen && colorSchemaBlack ? 'header__black_schema' : 'header__white_schema'}`}>
      <p className="header__logo">NewsExplorer</p>
      <div className="header__nav">
        <Navigation isColumn={false} colorSchemaBlack={colorSchemaBlack} onLogin={onLogin} onLogout={onLogout}/>
      </div>
      <div className="burger__menu_button" onClick={handleClick}>
        <div className={`${isMenuOpen ? 'burger__menu_line_top_down' : colorSchemaBlack ? 'burger__menu_line burger__menu_black_schema' : 'burger__menu_line burger__menu_white_schema'}`}></div>
        <div className={`${isMenuOpen ? 'burger__menu_line_down_top' : colorSchemaBlack ? 'burger__menu_line burger__menu_black_schema' : 'burger__menu_line burger__menu_white_schema'}`}></div>
      </div>
    </header>
  );
}

export default Header;