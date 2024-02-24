const express = require('express');
const app = express();

const productsRoutes = require('./app/routes/products');
const ordersRoutes = require('./app/routes/orders');

// Middleware to parse JSON bodies
app.use('/products', productsRoutes)
app.use('/orders', ordersRoutes)

module.exports = app;