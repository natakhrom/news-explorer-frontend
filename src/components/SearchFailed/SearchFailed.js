import React from 'react';
import './SearchFailed.css';

function SearchFailed({showComponent}) {
  return (
    <div className={`${showComponent ? 'searchFailed' : 'searchFailed_hidden'}`}>
      <h4 className="searchFailed__title">Во время запроса произошла ошибка.</h4>
      <p className="searchFailed__text">Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
    </div>
  )
}

export default SearchFailed;