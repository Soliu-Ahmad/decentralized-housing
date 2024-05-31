const express = require('express');
const Property = require('../models/Property');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// How to get all House
router.get('/', async (req, res) => {
  try {
    const property = await Property.find();
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new House
router.post('/', upload.single('image'), async (req, res) => {
  const property = new Property({
    image: req.file.path,
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    price: req.body.price
  });

  try {
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;