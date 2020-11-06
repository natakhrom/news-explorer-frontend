import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <div className="newsCardList__cards">
    {props.news.map((article, index) => (
        <NewsCard key={index} image={article.urlToImage} imageKeyWord={article.keyWord} date={article.publishedAt} title={article.title} text={article.description} source={article.sourceName} isSavedCard={props.isSavedCard} />
      ))}
    </div>
  )
}

export default NewsCardList;