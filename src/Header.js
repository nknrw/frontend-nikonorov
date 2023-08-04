import React, { useState } from 'react';
import './Header.css';
import logo from './images/Logo.svg';
import Search from './Search';
import BurgerMenu from './BurgerMenu';

const Header = ({ onSearch, toggleNavbar }) => { // Добавляем prop toggleNavbar
  return (
    <header className='header'>
      <div className='header-container'>
        <BurgerMenu toggleNavbar={toggleNavbar} /> {/* Передаем toggleNavbar в BurgerMenu */}
        <img className='header-logo' src={logo} alt='Logo' />
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
