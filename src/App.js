// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Start from './components/Start'
import Buy from './components/Buy'
import Sell from './components/Sell'
import Help from './components/Help'
import Error from './components/Error'

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/kop">
            <Buy />
          </Route>
          <Route exact path="/salj">
            <Sell />
          </Route>
          <Route exact path="/hjalp">
            <Help />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
