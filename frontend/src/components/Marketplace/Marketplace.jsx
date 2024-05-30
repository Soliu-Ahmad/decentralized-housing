import React from 'react';
import './Marketplace.css';
import { FaMapMarkerAlt, FaBed, FaShieldAlt } from 'react-icons/fa';

const blogPosts = [
  {
    imageUrl: `/image1.jpeg`,
    title: '10 things to know about buying a house',
    location: 'New York, USA',
    features: ['Two Bed', 'Single Room', 'Security'],
    price: '$1500'
  },
  {
    imageUrl: `/image2.jpeg`,
    title: 'How to find the perfect home',
    location: 'Los Angeles, USA',
    features: ['Three Bed', 'Double Room', 'Gated Community'],
    price: '$2000'
  },
  {
    imageUrl: `/image3.jpeg`,
    title: 'Understanding real estate trends',
    location: 'Chicago, USA',
    features: ['Four Bed', 'Master Suite', 'Near Park'],
    price: '$2500'
  },
  {
    imageUrl: `/image4.jpeg`,
    title: 'The future of housing market',
    location: 'Houston, USA',
    features: ['One Bed', 'Studio', 'Central Location'],
    price: '$1200'
  },
  {
    imageUrl: `/image5.jpg`,
    title: 'Tips for first-time home buyers',
    location: 'Phoenix, USA',
    features: ['Two Bed', 'Balcony', 'Pet Friendly'],
    price: '$1400'
  },
  {
    imageUrl: `/image6.jpg`,
    title: 'How to save money on your mortgage',
    location: 'Philadelphia, USA',
    features: ['Three Bed', 'Garage', 'Near School'],
    price: '$1800'
  },
  {
    imageUrl: `/image7.jpg`,
    title: 'Best neighborhoods to live in',
    location: 'San Antonio, USA',
    features: ['Four Bed', 'Swimming Pool', 'Quiet Area'],
    price: '$3000'
  },
  {
    imageUrl: `/image8.jpg`,
    title: 'What to consider when moving to a new city',
    location: 'San Diego, USA',
    features: ['Two Bed', 'Garden', 'Close to Beach'],
    price: '$2200'
  }
];

const Marketplace = () => {
  return (
    <div className="blogs-container">
      <div className="title">
        <h2>Market Place</h2>
      </div> 
      
      {blogPosts.map((post, index) => (
        <div className="blog-post" key={index}>
          <div className="image-container">
            <img src={post.imageUrl} alt={post.title} />
          </div>
          <div className="blog-title">{post.title}</div>
          <div className="blog-location">
            <FaMapMarkerAlt /> {post.location}
          </div>
          <div className="blog-features">
            {post.features.map((feature, i) => (
              <div key={i}><FaBed /> {feature}</div>
            ))}
          </div>
          <div className="blog-price">
            {post.price}
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
