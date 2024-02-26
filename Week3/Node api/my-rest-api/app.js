const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRoutes = require('./app/routes/products');
const ordersRoutes = require('./app/routes/orders');

mongoose.connect(
    'mongodb+srv://admin:32Itst996it2XrHk@node-rest-shop.t6kf5c7.mongodb.net/?retryWrites=true&w=majority&appName=node-rest-shop'
  ).then(() => {
    console.log('Connected to MongoDB Atlas');
  }).catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });
mongoose.Promise = global;  

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Handling CORS
app.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin',
               'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Origin','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Middleware to parse JSON bodies
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;