// app.js
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

const rateLimiter = require('./middleware/rateLimit');
const apiKeyMiddleware = require('./middleware/apiKey');
const { authenticateToken } = require('./middleware/auth');
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const sessionRoutes = require('./routes/sessions');
const paymentRoutes = require('./routes/payments');

const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(rateLimiter);
app.use(apiKeyMiddleware); // Ensure API Key Middleware is here

// Routes
app.use('/api/auth', authRouter);
app.use('/api/products', authenticateToken, productsRouter);
app.use('/api/sessions', sessionRoutes);
app.use('/api/payments', paymentRoutes);

// Database Sync
const { sequelize } = require('./models');
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Database sync error:', err));

module.exports = app;
