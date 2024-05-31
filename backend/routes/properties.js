const express = require('express');
const router = express.Router();
const multer = require('multer');
const Property = require('../models/Property');

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// GET all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST a new property
router.post('/', upload.single('image'), async (req, res) => {
    const property = new Property({
        image: req.file.path,
        title: req.body.title,
        location: req.body.location,
        price: req.body.price
    });

    try {
        const savedProperty = await property.save();
        res.json(savedProperty);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
