// src/components/Marketplace.js
import React, { useEffect, useState } from 'react';
import './Marketplace.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Marketplace = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

  return (
    <div className="blogs-container">
      <div className="title">
        <h2>Market Place</h2>
      </div>

      {properties.map(property => (
        <div className="blog-post" key={property._id}>
          <div className="image-container">
            <img src={`http://localhost:5000/${property.image}`} alt={property.title} />
          </div>
          <h1>{property.title}</h1>
          <div className="blog-location">
            <FaMapMarkerAlt /> <p>Location: {property.location}</p>
          </div>
          <div className="blog-price">
            <p>Price: ${property.price}</p>
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
