import React from 'react';
import './Marketplace.css';
import { FaMapMarkerAlt, FaBed, FaShieldAlt } from 'react-icons/fa';

const Marketplace = () => {
  return (
    <div className="blogs-container">
      <div className="title">
        <h2>Market Place</h2>
      </div> 
      
      {[1, 2, 3, 4, 5, 6, 7, 8, ].map((item, index) => (
        <div className="blog-post" key={index}>
          <div className="image-container">
            <img src="hom1.jpeg" alt="Blog" />
          </div>
          <div className="blog-title">10 things to know</div>
          <div className="blog-location">
            <FaMapMarkerAlt /> Location Name
          </div>
          <div className="blog-features">
            <div><FaBed /> Two Bed</div>
            <div><FaBed /> Single Room</div>
            <div><FaShieldAlt /> Security</div>
          </div>
          <div className="blog-price">
            $1500
          </div>
          <div className="read-more">
            <button>Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;