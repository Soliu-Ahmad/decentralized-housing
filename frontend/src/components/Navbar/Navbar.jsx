import React, { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { TransactionContext } from '../../contest/TransactionContext';
import { shortenAddress } from "../../utils/shortenAddress";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const {
    currentAccount,
    connectWallet,
  } = useContext(TransactionContext);

  if (!TransactionContext) {
    console.error("TransactionContext is undefined. Make sure you are using the provider.");
    return null;
  }


  const handleConnectWallet = () => {
    connectWallet()
      .then(() => {
        console.log("Wallet connected successfully.");
      })
      .catch((error) => {
        console.error("Failed to connect wallet:", error);
      });
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
          </ul>
          {
            currentAccount ? (
              <p className="connect">{shortenAddress(currentAccount)}</p>
            ) : (
              <button className="connect" onClick={handleConnectWallet}>Connect Wallet</button>
            )
          }
          
       
        <IoMdMenu className="menu-icon" onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
