const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;

