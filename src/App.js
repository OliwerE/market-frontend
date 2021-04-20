// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
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
  const [auth, setAuth] = useState(false) // Om anv är inloggad

  const handleAuthCheck = (json) => {
    const {isAuth} = json
    if(isAuth) {
      setAuth(true)
    } else if (!isAuth) {
      setAuth(false)
    } else {
      console.error('Internal Server Error') // ändra?
    }

  }

  useEffect(() => {
    fetch('http://localhost:8080/auth/check', {
    method: 'GET',
    credentials: 'include'
    }).then(res => {
      return res.json()
    }).then(json => {
      handleAuthCheck(json)
    }).catch(err => console.log(err))
  }, [])

  return (
      <Router>
        <Navbar setAuth={setAuth} auth={auth} /> {/* byt till useContext istället för att skicka setAuth till navbar som bara skickar vidare */}
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
