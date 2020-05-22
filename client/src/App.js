import React from 'react';
import Navbar from './components/home/Navbar';
import Header from './components/home/Header';
import Main from './components/home/Main';
import Footer from './components/home/Footer';
import './App.css';

function App() {
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

export default App;
