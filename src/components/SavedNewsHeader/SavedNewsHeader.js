import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  const { profile } = props;

  return (
    <section className="savedNewsHeader">
      <h3 className="savedNewsHeader__heading">Cохранённые статьи</h3>
      <h4 className="savedNewsHeader__title">{`${profile.name}, у вас ${profile.articles}\nсохранённых статей`}</h4>
      <p className="savedNewsHeader__text">По ключевым словам: {profile.keyWords.length > 0 && (<span className="keyWord">{`${profile.keyWords[0]}`}</span>)}{profile.keyWords.length > 1 && (<span className="keyWord">{`, ${profile.keyWords[1]}`}</span>)}{profile.keyWords.length > 2 && (' и ')}{profile.keyWords.length > 2 && (<span className="keyWord">{`${profile.keyWords.length - 2} другим`}</span>)}</p>
      {/* <p className="savedNewsHeader__text">По ключевым словам: {keyWords.map((word, index) => (
        <span key={index} className="keyWord">{`${word}`}</span>
      ))}</p> */}
      {/* <p className="savedNewsHeader__text">По ключевым словам: <span className="keyWord">Природа</span>, <span className="keyWord">Тайга</span> и <span className="keyWord">2-м другим</span></p> */}
    </section>
  );
}

export default SavedNewsHeader;