import React, { useState } from 'react';
import './NewsCard.css';
import { formatDate } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function NewsCard({article, isSavedNewsView, onButtonClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isArticleSaved, setIsArticleSaved] = useState(isSavedNewsView);

  function handleButtonClick() {
    if (currentUser) {
      const articleToProcess = isArticleSaved
      ? currentUser.articles.find((item) => item.link === article.link)
      : article;
      onButtonClick(articleToProcess, isArticleSaved);
    }
  }

  React.useEffect(() => {
    if (!isSavedNewsView) {
      if (currentUser) {
        setIsArticleSaved(currentUser.articles.some((item) => item.link === article.link));
      } else {
        setIsArticleSaved(false);
      }
    }
  }, [isSavedNewsView, currentUser, article]);

  return (
    
      <div className="newsCard">
        <p className={`${isSavedNewsView ? 'newsCard__keyWord' : 'newsCard__keyWord_hidden'}`}>{article.keyword}</p>
        <div className={`newsCard__icon ${isSavedNewsView ? 'newsCard__icon-trash' : isArticleSaved ? 'newsCard__icon-savedbookmark' : 'newsCard__icon-bookmark'}`} onClick={handleButtonClick}></div>
        <p className={`${!currentUser || isSavedNewsView ? 'newsCard__tooltip' : 'newsCard__tooltip_hidden'}`}>{isSavedNewsView ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}</p>
        <a target="_blank" rel="noopener noreferrer" href={article.link} className="newsCard__link">
          <img className="newsCard__image" src={article.image} alt="тематическая картинка новости" />
          <p className="newsCard__date">{formatDate(article.date)}</p>
          <div className="newsCard__txt">
            <h3 className="newsCard__heading">{article.title}</h3>
            <p className="newsCard__text">{article.text}</p>
          </div>
          <p className="newsCard__source">{article.source}</p>
        </a>
      </div>
  )
}

export default NewsCard;