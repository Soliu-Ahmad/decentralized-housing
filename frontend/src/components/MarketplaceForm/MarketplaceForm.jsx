import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MarketplaceForm.css';

const MarketplaceForm = ({ addBlogPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
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
    console.log(formData);
    addBlogPost(formData);
    setFormData({
      title: '',
      location: '',
      price: '',
      image: null
    });
  };

  return (
    <div className="marketplace-container">
      <h1 className="form-title">Create a New House</h1>
      <form className="marketplace-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image</label>
          <input type="file" name="image" onChange={handleChange} required />
        </div>
        <div className="form-columns">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="text" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MarketplaceForm;
