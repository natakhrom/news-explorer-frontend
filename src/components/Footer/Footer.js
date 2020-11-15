import React from 'react';
import './Footer.css';
import iconGitHub from '../../images/iconGitHub.svg'
import iconFacebook from '../../images/iconFacebook.svg'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__list">
              <nav className="footer__links">
                  <a href="#main" className="footer__link footer__link_main">Главная</a>
                  <a href="https://praktikum.yandex.ru/" target="_blank" className="footer__link footer__link_yandex">Яндекс.Практикум</a>
                </nav>
                <ul className="footer__icons">
                  <li><a href="https://github.com/" target="_blank" className="footer__icon"><img src={iconGitHub} alt="иконка GitHub"/></a></li>
                  <li><a href="https://www.facebook.com/" target="_blank" className="footer__icon"><img src={iconFacebook} alt="иконка Facebook"/></a></li>
              </ul>
              </div>
        </footer>
    );
}

export default Footer;