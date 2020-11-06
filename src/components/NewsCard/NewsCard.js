import React from 'react';
import './NewsCard.css';

function NewsCard({image, imageKeyWord, imageTooltip, name, date, title, text, source, isSavedCard}) {
  return (
    <>
    <div className="newsCard">
      <img className="newsCard__image" src={image} alt="тематическая картинка новости" />
      <p className={`${isSavedCard ? 'newsCard__keyWord' : 'newsCard__keyWord =+ newsCard__keyWord_hidden'}`}>{imageKeyWord}</p>
      <div className={`newsCard__icon ${isSavedCard ? 'newsCard__icon-trash' : 'newsCard__icon-bookmark'}`}></div>
      <p className="newsCard__tooltip">{isSavedCard ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}</p>
      <p className="newsCard__date">{date}</p>
      <h3 className="newsCard__heading">{title}</h3>
      <p className="newsCard__text">{text}</p>
      <p className="newsCard__source">{source}</p>
    </div>
  </>
  )
}

export default NewsCard;