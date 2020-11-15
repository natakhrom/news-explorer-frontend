import React from 'react';
import './SearchForm.css'

function SearchForm({onSearch}) {
  const [query, setQuery] = React.useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <h1 className="search__title">Что творится в мире?</h1>
      <p className="search__text">Находите самые свежие статьи на любую тему и сохраняйте в {"\n"}своём личном кабинете.</p>
      <fieldset className="search__field" >
        <input className="search__input" type="text" name="search" placeholder="Введите тему новости" onChange={handleQueryChange}></input>
        <button className="search__button" type="submit">Искать</button>
      </fieldset>
    </form>
  );
}

export default SearchForm