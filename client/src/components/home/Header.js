import React from 'react';
import Typed from 'react-typed';
import './Header.css';

import Ava from '../../assets/LRM_EXPORT_804512871102293_20200521_235837975.jpeg';

const textLines = [
  `Hello Stranger!`,
  `I am a man behind this web`,
  `I am a Web Developer,`,
  `A Photographer in vacation time,`,
  `A Dancer when listening a nice beat,`,
  `An Amateur Vocalist,`,
  `and An average Stroy Teller.`,
  `Welcome to my page and have a nice day :)`,
];

export default function Header() {
  return (
    <main>
      <section className="site-title">
        <div className="avatar">
          <img src={Ava} alt="almasfikri" className="ava" />
          <div className="site-content">
            <h1>Muhammad Kholid</h1>
            <div className="typed" style={{ fontSize: 18, marginTop: '1rem' }}>
              <Typed strings={textLines} typeSpeed={80} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
