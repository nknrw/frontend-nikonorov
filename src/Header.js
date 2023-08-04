import './Header.css';
import logo from './images/Logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img className='header-logo' src={logo} alt='Logo' />
        <div className='search-button' />
      </div>
    </header>
  );
};

export default Header;
