import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${isNavbarVisible ? 'show' : 'hidden'}`}>
      <ul className='navbar-menu'>
        <li className='navbar-element'>Demos<span className='navbar-chevron-down'></span></li>
        <li className='navbar-element'>Post<span className='navbar-chevron-down'></span>
          <ul className='menu-container'>
            <li className='menu-element'>Post Header<span className='menu-chevron-right' /></li>
            <li className='menu-element'>Post Layout<span className='menu-chevron-right' /></li>
            <li className='menu-element'>Share Buttons<span className='menu-chevron-right' /></li>
            <li className='menu-element'>Gallery Post<span className='menu-chevron-right' /></li>
            <li className='menu-element'>Video Post<span className='menu-chevron-right' /></li>
          </ul>
        </li>
        <li className='navbar-element'>Features<span className='navbar-chevron-down'></span></li>
        <li className='navbar-element'>Categories<span className='navbar-chevron-down'></span></li>
        <li className='navbar-element'>Shop<span className='navbar-chevron-down'></span></li>
        <li className='navbar-element'>Buy Now<span className='navbar-chevron-down'></span></li>
      </ul>
    </nav>
  );
};

export default Navbar;
