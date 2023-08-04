import './Header.css';
import logo from './images/Logo.svg';
import Search from './Search'

const Header = ({ onSearch }) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img className='header-logo' src={logo} alt='Logo' />
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
