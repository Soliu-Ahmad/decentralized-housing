const mongoose = require('mongoose');
const express = require("express")
const properties = require("./routes/properties")
const cors = require("cors")

const Property = require('./models/Property');
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/properties", properties )

const MONGO_URI = 'mongodb+srv://soliuahmad99:soliu1234@cluster0.suswr9x.mongodb.net/realasset';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected');
  // Add example property
  const properties = [
    {
      title: "Beautiful House",
      location: "New York",
      price: 500000,
      image: "uploads/house1.jpg"
    },
    {
      title: "Cozy Apartment",
      location: "San Francisco",
      price: 300000,
      image: "uploads/apartment1.jpg"
    }
  ];

  app.listen(PORT, () => console.log(`server running on port ${PORT}`))
  // await Property.insertMany(properties);
  // console.log('Properties added');
  // mongoose.connection.close();
}).catch(err => console.error(err));

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

