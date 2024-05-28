import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Marketplace.css';

const MarketplaceForm = ({ addBlogPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    features: '',
    price: '',
    image: null
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission, for now we just log the data
    console.log(formData);
    addBlogPost(formData);
    setFormData({
      title: '',
      location: '',
      features: '',
      price: '',
      image: null
    });
  };

  return (
    <form className="marketplace-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Image</label>
        <input type="file" name="image" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Features</label>
        <input type="text" name="features" value={formData.features} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="text" name="price" value={formData.price} onChange={handleChange} required />
      </div>
      
      <button type="button" onClick={() => navigate('/another-route')}>Add Blog Post</button>
    </form>
  );
};

export default MarketplaceForm;
