import React from 'react';
import './Footer.css';
import iconGitHub from '../../images/iconGitHub.svg'
import iconFacebook from '../../images/iconFacebook.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Supersite, Powered by News API</p>
            <div className="footer__list">
              <nav className="footer__links">
                  <Link to="/" className="footer__link footer__link_main">Главная</Link>
                  <Link to="https://praktikum.yandex.ru/" target="_blank" className="footer__link footer__link_yandex">Яндекс.Практикум</Link>
                </nav>
                <ul className="footer__icons">
                  <li><Link to="" className="footer__icon"><img src={iconGitHub} alt="иконка GitHub"/></Link></li>
                  <li><Link to ="" className="footer__icon"><img src={iconFacebook} alt="иконка Facebook"/></Link></li>
              </ul>
              </div>
        </footer>
    );
}

export default Footer;