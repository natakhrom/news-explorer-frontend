import React from 'react';
import './SavedNews.css'
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews(props) {
  return (
    <section className="savedNews">
      <SavedNewsHeader profile={props.profile}/>
      <div className="savedNews__cards">
        <NewsCardList news={props.news} isSavedCard={true}/>
      </div>
    </section>
  );
}

export default SavedNews;