import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
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
