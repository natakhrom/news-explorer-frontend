import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Navigation.css';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logout-black.svg';

function Navigation({isColumn, colorSchemaBlack, onLogin, onLogout}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
      <nav className={`menu ${isColumn && 'menu__popup'}`}>
        <NavLink exact to="/" className={`menu__link ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} activeClassName="menu__link_current">Главная</NavLink>

        <NavLink to="/signin" className={`${currentUser ? 'menu__link_hidden ' : 'menu__link menu__rectangle '} ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} onClick={onLogin}>Авторизоваться</NavLink>

        <NavLink to="/saved-news" className={`${currentUser ? 'menu__link ' : 'menu__link_hidden '} ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} activeClassName="menu__link_current">Сохранённые статьи</NavLink>

        <NavLink to="/" className={`${currentUser ? 'menu__link menu__rectangle ' : 'menu__link_hidden '} ${colorSchemaBlack ? 'menu__black_schema' : 'menu__white_schema'}`} onClick={onLogout}>{currentUser && `${currentUser.name}`}<img src={colorSchemaBlack ? logoutBlack : logout} alt="Выйти" className="menu__icon"/></NavLink>
      </nav>
  );
}

export default Navigation;