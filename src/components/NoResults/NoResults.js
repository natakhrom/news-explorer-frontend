import React from 'react';
import './NoResults.css';
import notFoudImage from '../../images/not-found.svg';

function NoResults({showComponent}) {
  return (
    <div className={`${showComponent ? 'no-results' : 'no-results-hidden'}`}>
      <img className="no-results__image" src={notFoudImage} alt="ничего не найдено" />
      <h4 className="no-results__title">Ничего не найдено</h4>
      <p className="no-results__text">К сожалению по вашему запросу{"\n"}ничего не найдено.</p>
    </div>
  )
}

export default NoResults;