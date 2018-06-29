import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#"><FontAwesomeIcon icon="home" /></a>
        </li>
        <li>
          <a href="#">Meus Albuns</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
      </ul>
    </div>
  )
};

export default Navbar;
