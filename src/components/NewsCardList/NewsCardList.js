import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({news, isSavedNewsView, onButtonClick}) {
  return (
    <div className="newsCardList__cards">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} isSavedNewsView={isSavedNewsView} onButtonClick={onButtonClick}/>
      ))}
    </div>
  )
}

export default NewsCardList;