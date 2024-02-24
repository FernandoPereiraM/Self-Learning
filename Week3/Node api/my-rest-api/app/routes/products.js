const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /products'
    });
});

router.get('/:productsId',(req, res, next) =>{
    const pk = req.params.productsId;
    if(pk === 'special'){
        res.status(200).json({
            message: 'Handling GET specialid by Products Id',
            pk: pk
        })
    }else{
        res.status(200).json({
            message: 'Handling GET by Products Id',
            pk: pk
        })
    }
    
})

router.patch('/:productsId',(req, res, next) =>{
    res.status(200).json({
        message: 'Updated Product by Id',
        pk: pk
    })
   
})

router.delete('/:productsId',(req, res, next) =>{
    res.status(200).json({
        message: 'Deleted Product by Id',
        pk: pk
    })
   
})

module.exports = router;