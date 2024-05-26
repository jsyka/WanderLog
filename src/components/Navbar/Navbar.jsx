import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../../assets/logo.png'

const Navbar = ({ theme, setTheme }) => {

  return (
    <nav className="navbar">
      <img
        src={logo}
        alt=""
        className="logo"
      />
      <ul className="links">
        <li>
          <Link to='/WanderLog' className='nav-text'>home</Link>
        </li>
        <li>
          <Link to='/about' className='nav-text'>about</Link>
        </li>
        <li>
          <Link to='/dashboard' className='nav-text'>dashboard</Link>
        </li>
        <li>
          <Link to='/login' className='nav-text'>login</Link>
        </li>
      </ul>
      {/* <div className="search-box">
        <input type="text" placeholder="search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div> */}
    </nav>
  );
};

export default Navbar;
