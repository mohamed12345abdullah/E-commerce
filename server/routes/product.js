const express=require('express')

const router=express.Router()

const productControler=require('../controlers/products.js')

router.route('/addProduct')
        .post(productControler.addProduct)

router.route('/getAllProducts')
        .get(productControler.getAllProducts)

router.route('/product:id')
    .get(productControler.getProduct) 
    .post(productControler.addProduct)



module.exports=router;