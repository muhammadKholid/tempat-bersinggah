import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';

import Home from './pages/Home';
import DetailReview from './pages/DetailReview';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/review">
          <DetailReview />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
