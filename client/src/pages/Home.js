import React from 'react';

import Header from '../components/home/Header';
import Main from '../components/home/Main';

import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}
