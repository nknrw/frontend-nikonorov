import React, { useEffect } from 'react';
import './MobileMenu.css';
import Navbar from '../Navbar/Navbar';
import logo from '../../images/Logo.svg';

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleScroll = (event) => {
      if (isOpen) {
        event.preventDefault();
      }
    };

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const onNotClose = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-menu-container" onClick={onNotClose}>
        <div className="mobile-menu-header">
          <img className="mobile-menu-logo" src={logo} alt="Logo" />
          <button className="mobile-menu-close-button" onClick={onClose} />
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default MobileMenu;
