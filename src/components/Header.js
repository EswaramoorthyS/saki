import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(!false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ 
      margin: '-220px',
     }}>
    <header className="App-header" >
      <div className="header-content" 
      style={{ 
        textAlign: 'left', 
        border: '2px solid #000' ,

      }}>
        <button className="hamburger-btn" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span className="green"></span>
            <span className="green"></span>
            <span className="green"></span>
          </div>
        </button>
        <h1>Saki Boutique</h1>
      </div>

      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="sidebar-menu" style={{ textAlign: 'left', margin: '20%' }}>
          <li className="menu-item" style={{ textAlign: 'left', margin: '20%', borderBottom: '1px solid #000' }}>
            <Link to="/home" onClick={toggleMenu}>Home</Link></li><br />
          <li className="menu-item" style={{ textAlign: 'left', margin: '20%', borderBottom: '1px solid #000' }}>
            <Link to="/men" onClick={toggleMenu}>Men</Link></li>
          <br />
          <li className="menu-item" style={{ textAlign: 'left', margin: '20%' , borderBottom: '1px solid #000'}}>
            <Link to="/women" onClick={toggleMenu}>Women</Link></li>
          <br />
          <li className="menu-item" style={{ textAlign: 'left', margin: '20%' , borderBottom: '1px solid #000'}}>
            <Link to="/kids" onClick={toggleMenu}>Kids</Link></li>
          <br />
          <li className="menu-item" style={{ textAlign: 'left', margin: '20%', borderBottom: '1px solid #000' }}>
            <Link to="/accessories" onClick={toggleMenu}>Accessories</Link></li>
          <br />
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Header;
