
const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create an order
router.post('/', async (req, res) => {
  const { user, products, totalAmount, shippingAddress, paymentMethod } = req.body;
  try {
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: 'Error creating order' });
  }
});

// Get all orders for an admin
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

module.exports = router;
    