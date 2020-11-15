import React from 'react';
import './SavedNews.css'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({news, onAddRemoveArticle}) {
  return (
    <section className="savedNews">
      <SavedNewsHeader/>
      <div className="savedNews__cards">
        <NewsCardList news={news} isSavedNewsView={true} onButtonClick={onAddRemoveArticle}/>
      </div>
    </section>
  );
}

export default SavedNews;