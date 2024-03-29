// import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Start from './components/Start'
import Buy from './components/Buy'
import Sell from './components/Sell'
import Help from './components/Help'
import Error from './components/Error'
import Account from './components/Account'
import CreateListing from './components/CreateListing'
import ListingPage from './components/ListingPage'

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
    fetch(process.env.REACT_APP_AUTH_CHECK, {
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
          
          {/* <Route exact path="/test">
            <Redirect to="/" />
          </Route> */}

          <Route path="/salj/">
            <ListingPage />
          </Route>

          <ProtectedAccount exact path="/konto" auth={auth} component={Account} />

          <ProtectedAccount exact path="/skapa-annons" auth={auth} component={CreateListing} />

          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

const ProtectedAccount = ({ auth, component:Component, path}) => {
   return <Route exact path={path} render={() => auth ? (<Component />) : (<Error />)} /> // alternativ: <Redirect to="/" /> för auth false
}

export default App;
