import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import Search from '../Search/Search';

const Header = ({ onSearch, onMobileMenuToggle }) => {
	return (
		<header className="header">
			<div className="header-container">
				<button className="header-menu-button" onClick={onMobileMenuToggle}>
					{/* You can add burger menu icon here */}
					{/* Example: <div className={`burger-menu-icon`} /> */}
				</button>
				<img className="header-logo" src={logo} alt="Logo" />
				<Search onSearch={onSearch} />
			</div>
		</header>
	);
};

export default Header;
