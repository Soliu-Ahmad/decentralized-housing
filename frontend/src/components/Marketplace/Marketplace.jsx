import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Marketplace = () => {
  const [properties, setProperties] = useState([]);
  const [processing, setProcessing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the properties!', error);
      });
  }, []);

  const handleBuy = (propertyId) => {
    setProcessing(propertyId);
    // Simulate a delay for processing the purchase
    setTimeout(() => {
      setProcessing(null);
      navigate(`/confirm/${propertyId}`);  // Navigate to confirmation page
    }, 2000);  // Adjust delay as necessary
  };

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
            <button
              onClick={() => handleBuy(property._id)}
              disabled={processing === property._id}
            >
              {processing === property._id ? 'Processing...' : 'Buy'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Marketplace;
