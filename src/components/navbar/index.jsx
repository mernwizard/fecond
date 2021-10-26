import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/fecond-bg.png";
import "./index.scss";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="Logo">
        <img src={Logo} alt="" className="mainLogo" />
      </NavLink>
      <div className="header">
        <NavLink
          className="headerLinks"
          activeClassName="activatedLink"
          to="/"
          exact
        >
          Home
        </NavLink>
        <NavLink
          className="headerLinks"
          activeClassName="activatedLink"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="headerLinks"
          activeClassName="activatedLink"
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className="headerLinks"
          activeClassName="activatedLink"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="toggleburgerContainer">
        {!showMenu ? (
          <i className="fas fa-bars" onClick={() => setShowMenu(!showMenu)}></i>
        ) : (
          <i
            className="fas fa-times"
            style={{ fontColor: "black" }}
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        )}
      </div>
      {showMenu && (
        <div className="res-header animate__animated animate__fadeInLeft">
          <NavLink
            className="headerLinks"
            activeClassName="activatedLink"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="headerLinks"
            activeClassName="activatedLink"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="headerLinks"
            activeClassName="activatedLink"
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className="headerLinks"
            activeClassName="activatedLink"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;
