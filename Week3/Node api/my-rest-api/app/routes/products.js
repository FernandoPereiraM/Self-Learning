const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('../models/product');

router.get('/',(req, res, next) => {
    Product
    .find()
    .select("name price _id")
    .exec()
    .then(docs =>{
        const response = {
            count: docs.length,
            products: docs
        };
        res.status(200).json(docs);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.post('/',(req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product
    .save()
    .then(result => {
        res.status(200).json({
            message: 'Created product!',
            createdProduct: {
                name: product.name,
                price: product.price,
                _id: product._id
            }
        });
    })
    .catch(err => {
        res.status(500).json({ error: err });
    }); 
});

router.get('/:productsId', (req, res, next) => {
    const pk = req.params.productsId;
    Product
        .findById(pk)
        .select('name price _id')
        .exec()
        .then(doc => {
            if(doc){
                res.status(200).json(doc);
            }else{
                res.status(404).json({
                    message: "No valid entry found"
                });
            }
           
        })
        .catch(err => {
            res.status(500).json({ error: err });
        }); 
});


router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }  
    Product.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product updated'
            });
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});


router.delete('/:productsId',(req, res, next) =>{
    const id = req.params.productsId;
    Product.deleteOne({
        _id: id
    })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Product Deleted!"
        });
    })
    .catch(err => {
        res.status(500).json(err);
    });
   
})

module.exports = router;