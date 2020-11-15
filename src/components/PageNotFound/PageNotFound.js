import React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';
import Bad from '../../images/bad.png';

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span> &nbsp;– Страница не найдена
      </h3>
      <img className="not-found__image" src={Bad} alt="Грустный смайлик"/>
      <p className="not-found__text">
       Ой, здесь ничего нет
      </p>
      <Link className="button button_type_to-main" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;