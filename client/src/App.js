import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores';

// import Navbar from './components/home/Navbar';
// import Footer from './components/home/Footer';

import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar /> */}

        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </Provider>
  );
}

export default App;
