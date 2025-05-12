import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from './logo.png';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="Saki Logo" />
          </div>


          <div>
            <nav className="navbar">
              <ul className="nav-links">
                {["home", "kurti", "western", "sarees", "materials", "accessories"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className={location.pathname === `/${item}` ? "active" : ""}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button className="hamburger-btn" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}>✖</button>
          <ul className="sidebar-menu">
            {["home", "women", "kids", "accessories"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item}`}
                  className={location.pathname === `/${item}` ? "active" : ""}
                  onClick={toggleMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
