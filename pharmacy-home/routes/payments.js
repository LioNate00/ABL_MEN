// routes/payments.js
const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { Payment, Product } = require('../models');
const router = express.Router();

// Create a payment
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Find the product to get its price
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const total = product.price * quantity;
    
    // Create a payment record
    const payment = await Payment.create({
      userId: req.user.id,
      productId,
      quantity,
      total
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all payments for a user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const payments = await Payment.findAll({
      where: { userId: req.user.id },
      include: [{ model: Product }] // To include product details in the response
    });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
