import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Marketplace.css';

const ConfirmPayment = ({ onConfirmPayment }) => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/properties/${propertyId}`)
      .then(response => {
        console.log(response.data)
        setProperty(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the property details!', error);
      });
  }, [propertyId]);

  const handleConfirmPurchase = () => {
    setConfirmed(true);
    onConfirmPayment(propertyId);
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="confirm-purchase-container">
      <h1>Purchase Confirmation</h1>
      {confirmed ? (
        <div>No Items to Confirm</div>
      ) : (
        <div className="card">
          <img src={`${property.image}`} alt={property.title} className="card-img-top" />
          <div className="card-body">
            <h2 className="card-title">{property.title}</h2>
            <p className="card-text">Location: {property.location}</p>
            <p className="card-text">Price: ${property.price}</p>
            <button className="button" onClick={handleConfirmPurchase}>
              Confirm Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPayment;
