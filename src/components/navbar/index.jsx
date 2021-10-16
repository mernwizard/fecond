import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/fecond-bg.png";
import "./index.scss";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="navbar">
      <Link to="/" className="Logo">
        <img src={Logo} alt="" className="mainLogo" />
      </Link>
      {showMenu && (
        <div className="header">
          <Link className="headerLinks" to="/">
            Home
          </Link>
          <Link className="headerLinks" to="/about">
            About
          </Link>
          <Link className="headerLinks" to="/products">
            Products
          </Link>
          <Link className="headerLinks" to="/contact">
            Contact
          </Link>
        </div>
      )}
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
    </nav>
  );
};

export default Nav;
