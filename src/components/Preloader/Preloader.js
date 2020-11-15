import React from 'react';
import './Preloader.css';

function Preloader({showComponent}) {
  return (
    <div className={`${showComponent ? 'preloader' : 'preloader-hidden'}`}>
      <i className="circle-preloader"></i>
      <p className="preloader__text">Идет поиск новостей...</p>
    </div>
  )
}

export default Preloader;