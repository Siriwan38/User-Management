import React, { useState } from "react";
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  console.log(click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="#">
              User Management <FiCode />
            </a>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">HOME</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">ABOUT</a>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
