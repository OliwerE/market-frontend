import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="logo">
            Logo
        </div>
        <div id="navMenu">
          <ul>
            <li>
              <Link to="/"><p>Start</p></Link>
            </li>
            <li>
              <Link to="/kop"><p>Köp</p></Link>
            </li>
            <li>
              <Link to="/salj"><p>Sälj</p></Link>
            </li>
            <li>
              <Link to="/hjalp"><p>Hjälp</p></Link>
            </li>
          </ul>
        </div>
        <div id="account">
            <button>Logga in</button>
            <button>Registrera</button>
        </div>
      </div>
      <div id="navMargin"></div>
    </>
  )
}

export default Navbar
