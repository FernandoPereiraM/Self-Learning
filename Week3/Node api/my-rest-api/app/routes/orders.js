const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /orders'
    });
});

router.post('/',(req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };

    res.status(200).json({
        message: 'Handling POST request to /orders',
        order: order
    });
});

router.get('/:ordersId',(req, res, next) =>{
    const pk = req.params.productsId;
    if(pk === 'special'){
        res.status(200).json({
            message: 'Handling GET specialid by orders Id',
            pk: pk
        })
    }else{
        res.status(200).json({
            message: 'Handling GET by orders Id',
            pk: pk
        })
    }
    
})

router.patch('/:ordersId',(req, res, next) =>{
    res.status(200).json({
        message: 'Updated orders by Id',
        pk: pk
    })
   
})

router.delete('/:productsId',(req, res, next) =>{
    res.status(200).json({
        message: 'Deleted orders by Id',
        pk: pk
    })
   
})

module.exports = router;