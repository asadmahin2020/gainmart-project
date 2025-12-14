// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Loads environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Allow Cross-Origin requests
app.use(express.json()); // To parse incoming JSON data

// MongoDB connection (No need for useNewUrlParser and useUnifiedTopology anymore)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));  


// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
