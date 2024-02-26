const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Order = require('../models/order')
const Product = require('../models/product');
const order = require('../models/order');

router.get('/',(req, res, next) => {
    Order
    .find()
    .select("_id product quantity")
    .exec()
    .then(docs => {
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.post('/', (req, res, next) => {
    Product.findById(req.body.productId)
    .then(product => {
        if(!product){
            return res.status(404).json({
                message: 'Product not found!',
            });
        }
        const order = new Order({
            _id: new mongoose.Types.ObjectId(),
            product: req.body.productId,
            quantity: req.body.quantity
        });
        return order
        .save()
    })
    .then(result => {
        res.status(201).json({
            message: 'Order created successfully',
            createdOrder: {
                _id: result._id,
                product: result.product,
                quantity: result.quantity
            }
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:ordersId',(req, res, next) =>{
    const pk = req.params.ordersId;
    Order
    .findById(pk)
    .select("_id product quantity")
    .exec()
    .then(order => {
        if(!order){
            return res.status(404).json({
                message: 'Order not found!',
            });
        }
        res.status(200).json({
            order: order
        });
    })
    .catch(err => {
        res.status(500).json({
            message: "Error!"
        });
    });
})

router.patch('/:ordersId',(req, res, next) =>{
    res.status(200).json({
        message: 'Updated orders by Id',
        pk: pk
    })
   
})

router.delete('/:ordersId',(req, res, next) =>{
    const id = req.params.ordersId;
    Order.deleteOne({
        _id: id
    })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Order Deleted!"
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
   
})

module.exports = router;