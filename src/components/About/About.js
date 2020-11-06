import React from 'react';
import Lisa from '../../images/Lisa Marie Simpson.jpeg'
import './About.css';

function About() {
  return (
    <section className="info">
      <img className="info__image" src={Lisa} alt="Лиза Симпсон" />
      <div className="info__author">
        <h2 className="info__author_title">Об авторе</h2>
        <p className="info__author_text">Привет, меня зовут Наталья Хромова. Это мой дипломный проект. В нём я применяю полученные знания по вёрстке (HTML, CSS), JavaScript, webpack, фреймворку React, NodeJS, а также MongoDB.</p>
        <p className="info__author_text">И всему этому я научилась в Яндекс.Практикуме</p>
      </div>
    </section>
  );
}

export default About;