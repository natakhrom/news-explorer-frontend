import React from 'react';
import './SearchResult.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResult({news, showComponent, articlesToShow, onAddRemoveArticle, onShowMoreArticles}) {
  return (
    <section className={`${showComponent ? 'search-result' : 'search-result-hidden'}`}>
      <h2 className="search-result__title">Результаты поиска</h2>
      <NewsCardList news={news.slice(0, articlesToShow)} isSavedNewsView={false} onButtonClick={onAddRemoveArticle}/>
      <button className={`${articlesToShow < news.length ? 'search-result__button' : 'search-result__button-hidden'}`} onClick={onShowMoreArticles}>Показать ещё</button>
    </section>
  );
}

export default SearchResult;