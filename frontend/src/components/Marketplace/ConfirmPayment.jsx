// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ethers } from 'ethers';
// import './Marketplace.css';
// import { PropertyStatusContext } from '../../context/PropertyStatusContext';

// const ConfirmPayment = ({ onConfirmPayment }) => {
//   const { propertyId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [confirmed, setConfirmed] = useState(false);
//   const { propertyStatus, setPropertyStatus } = useContext(PropertyStatusContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/properties/${propertyId}`)
//       .then(response => {
//         setProperty(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the property details!', error);
//       });
//   }, [propertyId]);

//   const handleConfirmPurchase = async () => {
//     if (!window.ethereum) {
//       alert('MetaMask is not installed!');
//       return;
//     }

//     try {
//       console.log('Requesting accounts...');
//       await window.ethereum.request({ method: 'eth_requestAccounts' });

//       console.log('Creating provider...');
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       console.log('Provider created:', provider);

//       console.log('Getting signer...');
//       const signer = provider.getSigner();
//       console.log('Signer:', signer);

//       console.log('Sending transaction...');
//       const tx = await signer.sendTransaction({
//         to: '0x759Ea4982188F201B593db78F68Bdd312dDA0748', // Replace with the seller's address
//         value: ethers.utils.parseEther(property.price.toString()),
//       });

//       console.log('Waiting for transaction...');
//       await tx.wait();
//       console.log('Transaction confirmed:', tx);

//       setConfirmed(true);
//       onConfirmPayment(propertyId);
//       setPropertyStatus((prevStatus) => ({ ...prevStatus, [propertyId]: 'bought' }));

//       setTimeout(() => {
//         navigate('/marketplace'); // Navigate back to marketplace
//       }, 2000); // Adjust delay as necessary
//     } catch (error) {
//       console.error('Error with MetaMask transaction', error);
//       alert('Transaction failed!');
//     }
//   };

//   if (!property) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="confirm-purchase-container">
//       <h1>Purchase Confirmation</h1>
//       {confirmed ? (
//         <div>Purchase confirmed!</div>
//       ) : (
//         <div className="card">
//           <img src={`http://localhost:5000/${property.image}`} alt={property.title} className="card-img-top" />
//           <div className="card-body">
//             <h2 className="card-title">{property.title}</h2>
//             <p className="card-text">Location: {property.location}</p>
//             <p className="card-text">Price: ${property.price}</p>
//             <button className="button" onClick={handleConfirmPurchase}>
//               Confirm Purchase
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConfirmPayment;




// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ethers } from 'ethers';
// import './Marketplace.css';
// import { PropertyStatusContext } from '../../context/PropertyStatusContext';

// const ConfirmPayment = ({ onConfirmPayment }) => {
//   const { propertyId } = useParams();
//   const [property, setProperty] = useState(null);
//   const [confirmed, setConfirmed] = useState(false);
//   const { propertyStatus, setPropertyStatus } = useContext(PropertyStatusContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/properties/${propertyId}`)
//       .then(response => {
//         setProperty(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the property details!', error);
//       });
//   }, [propertyId]);

//   const handleConfirmPurchase = async () => {
//     if (!window.ethereum) {
//       alert('MetaMask is not installed!');
//       return;
//     }

//     try {
//       console.log('Requesting accounts...');
//       await window.ethereum.request({ method: 'eth_requestAccounts' });

//       console.log('Creating provider...');
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       console.log('Provider created:', provider);

//       console.log('Getting signer...');
//       const signer = provider.getSigner();
//       console.log('Signer:', signer);

//       console.log('Sending transaction...');
//       const tx = await signer.sendTransaction({
//         to: '0x759Ea4982188F201B593db78F68Bdd312dDA0748', // Replace with the seller's address
//         value: ethers.utils.parseEther(property.price.toString()),
//       });

//       console.log('Waiting for transaction...');
//       await tx.wait();
//       console.log('Transaction confirmed:', tx);

//       setConfirmed(true);
//       onConfirmPayment(propertyId);
//       setPropertyStatus((prevStatus) => ({ ...prevStatus, [propertyId]: 'bought' }));

//       setTimeout(() => {
//         navigate('/marketplace'); // Navigate back to marketplace
//       }, 2000); // Adjust delay as necessary
//     } catch (error) {
//       console.error('Error with MetaMask transaction', error);
//       alert('Transaction failed!');
//     }
//   };

//   if (!property) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="confirm-purchase-container">
//       <h1>Purchase Confirmation</h1>
//       {confirmed ? (
//         <div>Purchase confirmed!</div>
//       ) : (
//         <div className="card">
//           <img src={`http://localhost:5000/${property.image}`} alt={property.title} className="card-img-top" />
//           <div className="card-body">
//             <h2 className="card-title">{property.title}</h2>
//             <p className="card-text">Location: {property.location}</p>
//             <p className="card-text">Price: ${property.price}</p>
//             <button className="button" onClick={handleConfirmPurchase}>
//               Confirm Purchase
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ConfirmPayment;




import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ethers } from 'ethers';
import './Marketplace.css';
import { PropertyStatusContext } from '../../context/PropertyStatusContext';

const ConfirmPurchase = ({ onConfirmPayment }) => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const { setPropertyStatus } = useContext(PropertyStatusContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/properties/${propertyId}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the property details!', error);
      });
  }, [propertyId]);

  const handleConfirmPurchase = async () => {
    if (!window.ethereum) {
      alert('MetaMask is not installed!');
      return;
    }

    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: '0x759Ea4982188F201B593db78F68Bdd312dDA0748', // Replace with the seller's address
        value: ethers.utils.parseEther(property.price.toString()),
      });

      await tx.wait();

      setConfirmed(true);
      onConfirmPayment(propertyId);
      setPropertyStatus(prevStatus => ({ ...prevStatus, [propertyId]: 'bought' }));

      setTimeout(() => {
        navigate('/marketplace');
      }, 2000);
    } catch (error) {
      console.error('Error with MetaMask transaction', error);
      alert('Transaction failed!');
    }
  };

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div className="confirm-purchase-container">
      <h1>Purchase Confirmation</h1>
      {confirmed ? (
        <div>Purchase confirmed!</div>
      ) : (
        <div className="card">
          <img src={`http://localhost:5000/${property.image}`} alt={property.title} className="card-img-top" />
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

export default ConfirmPurchase;
