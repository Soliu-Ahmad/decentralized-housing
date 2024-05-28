import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const connect = () => {
    alert("Currently not available")
  }

  return (
    <div>
        <nav>
            <h2>LOGO</h2>
            <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
                <li>Property</li>
                <li>FAQSs</li>
                <li>contact</li>
            </ul>
            <button onClick={connect} className='connect'>Connect Wallet</button>
            <IoMdMenu className='menu-icon' onClick={toggleMenu} />
        </nav>
    </div>
  );
}

export default Navbar;