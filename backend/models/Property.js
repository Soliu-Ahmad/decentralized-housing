const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    image: String,
    title: String,
    location: String,
    price: Number,
});

module.exports = mongoose.model('Property', propertySchema);
