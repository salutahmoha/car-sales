import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import "./navbar.css";
import logo from '../Assets/Scania Logo Wallpaper 37846.jpg'

import { BsIndent } from "react-icons/bs";
import { HamburgetMenuClose, HamburgetMenuOpen } from './Icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    
      const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>
              <img src={logo} alt="" className="navbar-img" />
            </span>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="trucks"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                Trucks
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="electricbus"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                Buses
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="others"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                Others
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="footer"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={80}
                className="nav-links"
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
