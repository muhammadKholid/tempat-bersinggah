import React from 'react';

import Header from '../components/home/Header';
import Main from '../components/home/Main';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';

import '../App.css';

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
