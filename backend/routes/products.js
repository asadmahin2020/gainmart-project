
const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create a new product (Admin only)
router.post('/', async (req, res) => {
  const { name, description, price, stock, imageUrl, category } = req.body;
  try {
    const newProduct = new Product({ name, description, price, stock, imageUrl, category });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: 'Error creating product' });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

module.exports = router;
    