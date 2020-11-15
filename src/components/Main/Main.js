import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm'
import SearchResult from '../SearchResult/SearchResult';
import NoResults from '../NoResults/NoResults';
import Preloader from '../Preloader/Preloader';
import SearchFailed from '../SearchFailed/SearchFailed';
import About from '../About/About';

function Main({news, isSearchInProcess, isSearchFailed, searchWasUsed, articlesToShow, onSearch, onAddRemoveArticle, onShowMoreArticles}) {
  return (
    <main className="content">
      <SearchForm onSearch={onSearch}/>
      <Preloader showComponent={isSearchInProcess}/>
      <SearchFailed showComponent={isSearchFailed}/>
      <NoResults showComponent={!isSearchInProcess && searchWasUsed && !isSearchFailed && news.length === 0}/>
      <SearchResult news={news} showComponent={!isSearchInProcess && searchWasUsed && !isSearchFailed && news.length > 0} articlesToShow={articlesToShow} onAddRemoveArticle={onAddRemoveArticle} onShowMoreArticles={onShowMoreArticles}/>
      <About />
    </main>
  );
}

export default Main;