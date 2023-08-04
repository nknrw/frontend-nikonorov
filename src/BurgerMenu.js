import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ toggleNavbar }) => {
  const handleMenuClick = () => {
    toggleNavbar();
  };

  return (
    <button className='burger-menu-button' onClick={handleMenuClick}>
      {/* You can add burger menu icon here */}
      {/* Example: <div className={`burger-menu-icon ${isMenuOpen ? 'open' : ''}`} /> */}
    </button>
  );
};

export default BurgerMenu;
