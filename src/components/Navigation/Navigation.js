import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logout-black.svg';

function Navigation({isColumn, isAuthenticated, colorSchemaBlack, userName, onAuthClick}) {
  return (
      <nav className={`menu ${isColumn && 'menu__popup'}`}>
        <NavLink exact to="/" className={`menu__link ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} activeClassName="menu__link_current">Главная</NavLink>

        <NavLink to="/signin" className={`${isAuthenticated ? 'menu__link_hidden ' : 'menu__link menu__rectangle '} ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} onClick={onAuthClick}>Авторизоваться</NavLink>

        <NavLink to="/saved-news" className={`${isAuthenticated ? 'menu__link ' : 'menu__link_hidden '} ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} activeClassName="menu__link_current">Сохранённые статьи</NavLink>

        <NavLink to="/" className={`${isAuthenticated ? 'menu__link menu__rectangle ' : 'menu__link_hidden '} ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`}>{`${userName}`}<img src={colorSchemaBlack ? logoutBlack : logout} alt="Выйти" className="menu__icon" /></NavLink>
      </nav>
  );
}

export default Navigation;