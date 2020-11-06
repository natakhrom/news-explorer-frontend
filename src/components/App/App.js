import React, { useState } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
// import logo from './logo.svg';
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
import News from '../../utils/articleTemp';
import UserProfile from '../../utils/profileTemp';

function App() {
  const history = useHistory();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [isRegisterOpen, setRegisterOpen] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isRegisteredOpen, setRegistered] = useState(false);

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
    setRegistered(false);
    history.push('/');
  }

  function onLogin() {
    setLoginOpen(false);
    setAuthenticated(true);
  }

  function onRegister() {
    setRegisterOpen(false);
    setRegistered(true);
  }

  return (
    <div className="page">
      <PopupWithBurgerMenu isOpen={isMenuOpen} userName={UserProfile.name} isAuthenticated={isAuthenticated} onAuthClick={onShowLogin}/>
      <Switch>
        <Route exact path="/">
          <Header userName={UserProfile.name} isAuthenticated={isAuthenticated} onShowPopupMenu={onShowPopupMenu} onAuthClick={onShowLogin}/>
          <Main news={News}/>
        </Route>
        <Route path="/saved-news">
          <Header userName={UserProfile.name} isAuthenticated={isAuthenticated} onShowPopupMenu={onShowPopupMenu} colorSchemaBlack={true}/>
          <SavedNews news={News} profile={UserProfile}/>
        </Route>
        <Route path='/signin'>
          <Header userName={UserProfile.name} isAuthenticated={isAuthenticated} onShowPopupMenu={onShowPopupMenu} onAuthClick={onShowLogin}/>
          <Main news={News}/>
          <Login isOpen={isLoginOpen} onClose={onCloseForm} onLogin={onLogin} onLinkClick={onShowRegister} regPath="/signup"/>
        </Route>
        <Route path='/signup'>
          <Header userName={UserProfile.name} isAuthenticated={isAuthenticated} onShowPopupMenu={onShowPopupMenu} onAuthClick={onShowLogin}/>
          <Main news={News}/>
          <Register isOpen={isRegisterOpen} onClose={onCloseForm} onRegister={onRegister} onLinkClick={onShowLogin} logPath="/signin"/>
          <InfoTooltip isOpen={isRegisteredOpen} path="/signin" onClose={onCloseForm} onLinkClick={onShowLogin}/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
