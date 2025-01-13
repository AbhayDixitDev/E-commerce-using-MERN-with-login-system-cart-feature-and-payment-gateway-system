const express = require('express');
const router = express.Router();
const { Stripe } = require('stripe');
const Razorpay = require('razorpay');
const dotenv = require('dotenv');
const Order = require('../models/orderModel');
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// Stripe Checkout Route
router.post('/checkout/stripe', async (req, res) => {
  const { cart, amount, name, email } = req.body;

  const items1 = cart.map(item => ({
    id: item._id,
    name: item.title,
    image: item.img[0],
    price: item.price,
    quantity: item.quantity,
  }));

  const items = cart.map(item => ({
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.img[0]],
      },
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/failed',
    });

    const order = new Order({
      items: items1,
      userEmail: email,
      userName: name,
      numberOfItems: cart.length,
      totalPrice: amount,
      paymentType: 'Online Using Stripe',
      paymentStatus: 'Successful',
      transactionId: session.id,
    });

    await order.save();
    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Razorpay Checkout Route
router.post('/checkout/razorpay', async (req, res) => {
  const { cart, amount, name, email } = req.body;

  const rupee = amount * 100; // Convert amount to paise

  const items1 = cart.map(item => ({
    id: item._id,
    name: item.title,
    image: item.img[0],
    price: item.price,
    quantity: item.quantity,
  }));

  const options = {
    amount: rupee, // amount in paise
    currency: 'INR',
    receipt: 'receipt#1',
  };

  try {
    const order = await razorpay.orders.create(options);

    const newOrder = new Order({
      items: items1,
      userEmail: email,
      userName: name,
      numberOfItems: cart.length,
      totalPrice: amount,
      paymentType: 'Online Using Razorpay',
      paymentStatus: 'Pending',
      transactionId: order.id,
    });

    await newOrder.save();

    res.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
      order_id: order.id,
      key: process.env.RAZORPAY_KEY_ID, // Send Razorpay key ID to the frontend
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;