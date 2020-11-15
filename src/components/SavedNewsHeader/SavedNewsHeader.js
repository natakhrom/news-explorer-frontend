import React, { useState } from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader() {
  const currentUser = React.useContext(CurrentUserContext);
  const [popularArticles, setPopularArticles] = useState([]);
  const [articleCount, setArticleCount] = useState(0);

  React.useEffect(() => {
    var count = 0;

    if (currentUser) {
      const statistics = {};

      for (var i = 0; i < currentUser.articles.length; ++i) {
        const article = currentUser.articles[i];

        if (!statistics.hasOwnProperty(article.keyword)) {
          statistics[article.keyword] = 0;
        }

        statistics[article.keyword] += 1;
      }

      const keywordsFrequency = [];

      for (var prop in statistics) {
        count += statistics[prop];

        keywordsFrequency.push({
          keyword: prop,
          frequency: statistics[prop]
        });
      }

      keywordsFrequency.sort((left, right) => {
        return right.frequency - left.frequency;
      });

      setPopularArticles(keywordsFrequency);
    }

    setArticleCount(count);
  }, [currentUser]);

  return (
    <section className="savedNewsHeader">
      <h3 className="savedNewsHeader__heading">Cохранённые статьи</h3>
      <h4 className="savedNewsHeader__title">{currentUser && `${currentUser.name}, у вас ${articleCount}\nсохранённых статей`}</h4>
      <p className="savedNewsHeader__text">По ключевым словам: {popularArticles.length > 0 && (<span className="keyWord">{`${popularArticles[0].keyword}`}</span>)}{popularArticles.length > 1 && (<span className="keyWord">{`, ${popularArticles[1].keyword}`}</span>)}{popularArticles.length > 2 && (' и ')}{popularArticles.length === 3 && (<span className="keyWord">{`${popularArticles[2].keyword}`}</span>)}{popularArticles.length > 3 && (<span className="keyWord">{`${popularArticles.length - 2} другим`}</span>)}</p>
    </section>
  );
}

export default SavedNewsHeader;