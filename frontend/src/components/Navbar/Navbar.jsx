import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connect = () => {
    alert("Currently not available");
  };

  return (
    <div>
      <nav className="nav-header">
        <h2>
          <a href="/" className="logo-link">TokenEstate</a>
        </h2>
        <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="/property">Property</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/contact">Contact</a></li>
          <li className="connect">
            <button onClick={connect} className="connect">
              Connect Wallet
            </button>
          </li>
        </ul>
        <IoMdMenu className="menu-icon" onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
