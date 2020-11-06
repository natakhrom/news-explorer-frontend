import React from 'react';
import './SearchResult.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SearchResult(props) {
  const [ cardsToShow, setCardsToShow ] = React.useState(0);

  React.useEffect(() => {
    showMoreCards();
  }, []);

  function showMoreCards() {
    const newValue = cardsToShow + 3 < props.news.length
      ? cardsToShow + 3
      : props.news.length;

    setCardsToShow(newValue);
  }

  return (
    <section className="search-result">
      <h2 className="search-result__title">Результаты поиска</h2>
      <NewsCardList news={props.news.slice(0, cardsToShow)} isSavedCard={false}/>
      <button className="search-result__button" onClick={showMoreCards}>Показать ещё</button>
    </section>
  );
}

export default SearchResult;