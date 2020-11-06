import React from 'react';
import './Main.css';
import SearchForm from '../SearchForm/SearchForm'
import SearchResult from '../SearchResult/SearchResult';
import About from '../About/About';

function Main(props) {
  return (
    <main className="content">
      <SearchForm />
      <SearchResult news={props.news}/>
      <About />
    </main>
  );
}

export default Main;