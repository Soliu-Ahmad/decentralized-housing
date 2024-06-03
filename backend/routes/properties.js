// const express = require('express');
// const Property = require('../models/Property');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // How to get all House
// router.get('/', async (req, res) => {
//   try {
//     const property = await Property.find();
//     res.json(property);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Add new House
// router.post('/', upload.single('image'), async (req, res) => {
// // router.post('/', upload.fields([{name: 'image', maxCount: 1}, {name: 'creatorImage', maxCount: 1}]), async (req, res) => {
//   console.log('first')
//   const property = new Property({
//     image: req.file.path,
//     title: req.body.title,
//     location: req.body.location,
//     description: req.body.description,
//     price: req.body.price
//   });


//   try {
//     const newProperty = await property.save();
//     res.status(201).json(newProperty);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // GET property by ID
// router.get('/:propertyId', async (req, res) => {
//   try {
//     const property = await Property.findById(req.params.propertyId);
//     if (!property) {
//       return res.status(404).json({ message: 'Property not found' });
//     }
//     res.json(property);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;




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

// Get all properties
router.get('/', async (req, res) => {
  try {
    const property = await Property.find();
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new property
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

// Get property by ID
router.get('/:propertyId', async (req, res) => {
  try {
    const property = await Property.findById(req.params.propertyId);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
