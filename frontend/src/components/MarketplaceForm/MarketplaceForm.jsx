import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MarketplaceForm.css';

const MarketplaceForm = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('location', location);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/properties', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Property created:', response.data);
            // Show success toast
            toast.success('Property created successfully!');
            // Reset form
            setTitle('');
            setLocation('');
            setPrice('');
            setImage(null);
            // Navigate to the marketplace after a short delay to allow the toast to be visible
            setTimeout(() => navigate('/marketplace'), 2000);
        } catch (error) {
            console.error('There was an error creating the property!', error);
            // Show error toast
            toast.error('There was an error creating the property!');
        }
    };

    return (
        <div className="marketplace-container">
            <h1 className="form-title">Create a New House</h1>
            <form className="marketplace-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="form-columns">
                    <div className="form-group">
                        <label>Location:</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                </div>
                <div className="form-group">
                    <label>Image:</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <button type="submit">Create Property</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default MarketplaceForm;
