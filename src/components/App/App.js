import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main'
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithBurgerMenu from '../PopupWithBurgerMenu/PopupWithBurgerMenu';
import Register from '../Register/Register';
import Login from '../Login/Login';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import PageNotFound from '../PageNotFound/PageNotFound';
import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const history = useHistory();

  const [foundNews, setFoundNews] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [isRegisterOpen, setRegisterOpen] = useState(true);
  const [searchWasUsed, setSearchWasUsed] = useState(false);
  const [isSearchFailed, setIsSearchFailed] = useState(false);
  const [isSearchInProcess, setIsSearchInProcess] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [articlesToShow, setArticlesToShow] = useState(0);
  const [errorMessageText, setErrorMessageText] = useState('');
  const [registeredSuccessfully, setRegisteredSuccessfully] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);

  function onShowPopupMenu(isOpen) {
    setMenuOpen(isOpen);
  }

  function onShowLogin() {
    setLoginOpen(true);
    setRegisterOpen(false);
  }

  function onShowRegister() {
    setLoginOpen(false);
    setRegisterOpen(true);
  }

  function onCloseForm() {
    setLoginOpen(false);
    setRegisterOpen(false);
    setUserAlreadyExists(false);
    setRegisteredSuccessfully(false);
    history.push('/');
  }

  function onSignin(email, password) {
    mainApi.signIn(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        // loadUserData(data.token);
        Promise
        .all([mainApi.getUserInfo(data.token), mainApi.getArticles(data.token)])
        .then(([userInfoResponse, savedNewsResponse]) => {
          setCurrentUser({
            token: data.token,
            name: userInfoResponse.data.name,
            email: userInfoResponse.data.email,
            articles: savedNewsResponse.data
          });
          history.push("/");
        })
        .catch((err) => {
          setErrorMessageText('Не удалось получить данные пользователя');
          //console.log(err);
        });
      }
    })
    .catch((err) => {
      setErrorMessageText('Не удалось авторизоваться');
      //console.log(err);
    });
  }

  function onSignup(email, password, name) {
    mainApi.signUp(email, password, name)
    .then((data) => {
      setRegisterOpen(false);
      setUserAlreadyExists(false);
      setRegisteredSuccessfully(true);
    })
    .catch((err) => {
      if (err.status === 409) {
        setUserAlreadyExists(true);
      } else {
        setErrorMessageText('Не удалось зарегистрировать пользователя');
      }
      //console.log(err);
    });
  }

  function onLogout() {
    localStorage.removeItem('token');
    setCurrentUser(undefined);
    history.push('/');
  }

  function onAddRemoveArticle(article, remove) {
    if (remove) {
      onRemoveArticle(article);
    } else {
      onSaveArticle(article);
    }
  }

  function onSaveArticle(article) {
    if (currentUser) {
      mainApi.saveArticle(currentUser.token, article)
      .then((savedArticle) => {
        const prevUserArticles = currentUser.articles;
        setCurrentUser({...currentUser, articles: [...prevUserArticles, savedArticle.data]});
      })
      .catch((err) => {
        setErrorMessageText('Не удалось сохранить статью');
        //console.log(err);
      })
    }
  }

  function onRemoveArticle(article) {
    if (currentUser) {
      mainApi.deleteArticle(currentUser.token, article._id)
      .then((deletedArticle) => {
        const prevUserArticles = currentUser.articles;
        const newUserArticles = prevUserArticles.filter((item) => deletedArticle.data._id !== item._id);
        setCurrentUser({...currentUser, articles: [...newUserArticles]});
      })
      .catch((err) => {
        setErrorMessageText('Не удалось удалить статью');
        //console.log(err);
      })
    }
  }

  function handleShowMoreArticles() {
    setArticlesToShow(Math.min(articlesToShow + 3, foundNews.length));
  }

  function handleSearchRequest(query) {

    if (query === "") {
      setErrorMessageText('Нужно ввести ключевое слово');

      return;
    }

    setFoundNews([]);
    setArticlesToShow(0);
    setSearchWasUsed(true);
    setIsSearchFailed(false);
    setIsSearchInProcess(true);
    localStorage.setItem('search', null);

    newsApi.getNews(query)
    .then(res => {
      const articleList = res.articles.map((article) => {
        return {
          keyword: query,
          source: article.source.name,
          title: article.title,
          date: article.publishedAt,
          text: article.description,
          image: article.urlToImage || 'https://ldaily.ua/wp-content/uploads/2017/03/df958bc1d296d0bce3981c9798d6c689.jpg',
          link: article.url
        };
      });
      setFoundNews(articleList);
      setArticlesToShow(Math.min(3, articleList.length));
      localStorage.setItem('search', JSON.stringify(articleList));
    })
    .catch((err) => {
      setIsSearchFailed(true);
      //console.log(err);
    })
    .finally(() => setIsSearchInProcess(false));
  }

  // function loadUserData(token) {
  //   Promise
  //   .all([mainApi.getUserInfo(token), mainApi.getArticles(token)])
  //   .then(([userInfoResponse, savedNewsResponse]) => {
  //     setCurrentUser({
  //       token: token,
  //       name: userInfoResponse.data.name,
  //       email: userInfoResponse.data.email,
  //       articles: savedNewsResponse.data
  //     });
  //     history.push("/");
  //   })
  //   .catch((err) => console.log(err));
  // }

  React.useEffect(() => {
    function tokenCheck() {
      const token = localStorage.getItem('token');
      if (token) {
        // loadUserData(token);
        Promise
        .all([mainApi.getUserInfo(token), mainApi.getArticles(token)])
        .then(([userInfoResponse, savedNewsResponse]) => {
          setCurrentUser({
            token: token,
            name: userInfoResponse.data.name,
            email: userInfoResponse.data.email,
            articles: savedNewsResponse.data
          });
          history.push("/");
        })
        .catch((err) => {
          setErrorMessageText('Не удалось получить данные пользователя');
          //console.log(err);
        });
      }
    }

    tokenCheck();

    function loadSearchResults() {
      const searchResults = localStorage.getItem('search');
      if (searchResults) {
        const locallySavedArticles = JSON.parse(searchResults);
        setFoundNews(locallySavedArticles);
        setArticlesToShow(Math.min(3, locallySavedArticles.length));
        setSearchWasUsed(true);
      }
    }

    loadSearchResults();
  }, [history]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <PopupWithBurgerMenu isOpen={isMenuOpen} onLogin={onShowLogin} onLogout={onLogout}/>
        <ErrorMessage isOpen={errorMessageText !== ''} error={errorMessageText} onClose={() => setErrorMessageText('')}/>
        <Switch>
            <Route exact path="/">
              <Header onShowPopupMenu={onShowPopupMenu} onLogin={onShowLogin} onLogout={onLogout}/>
              <Main news={foundNews} isSearchInProcess={isSearchInProcess} isSearchFailed={isSearchFailed} searchWasUsed={searchWasUsed} articlesToShow={articlesToShow} onSearch={handleSearchRequest} onAddRemoveArticle={onAddRemoveArticle} onShowMoreArticles={handleShowMoreArticles}/>
            </Route>
            <ProtectedRoute path='/saved-news' loggedIn={currentUser} component={
              <>
                <Header colorSchemaBlack={true} onShowPopupMenu={onShowPopupMenu} onLogout={onLogout}/>
                <SavedNews news={currentUser ? currentUser.articles : []} onAddRemoveArticle={onAddRemoveArticle}/>
              </>
            } />
            <Route path='/signin'>
              <Header onShowPopupMenu={onShowPopupMenu} onLogin={onShowLogin} onLogout={onLogout}/>
              <Main news={foundNews} searchWasUsed={searchWasUsed} />
              <Login isOpen={isLoginOpen} onClose={onCloseForm} onSignin={onSignin} onLinkClick={onShowRegister} regPath="/signup"/>
            </Route>
            <Route path='/signup'>
              <Header onShowPopupMenu={onShowPopupMenu} onLogin={onShowLogin} onLogout={onLogout}/>
              <Main news={foundNews} searchWasUsed={searchWasUsed} />
              <Register isOpen={isRegisterOpen} userAlreadyExists={userAlreadyExists} onResetUserAlreadyExists={() => setUserAlreadyExists(false)} onClose={onCloseForm} onSignup={onSignup} onLinkClick={onShowLogin} logPath="/signin"/>
              <InfoTooltip isOpen={registeredSuccessfully} path="/signin" onClose={onCloseForm} onLinkClick={onShowLogin}/>
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
