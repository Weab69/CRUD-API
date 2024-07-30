const express = require('express')
const router = express.Router()
const Product = require('../models/products.model.js')
const { getProduct, getByid, postProduct, updateProduct, deleteProduct } =
    require('../controllers/product.controller')
router.get('/',getProduct )
router.get('/:id',getByid)
router.post('/',postProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

// router.route('/').get(getProduct).post(postProduct)
// router.route('/:id').get(getByid).put(updateProduct).delete(deleteProduct)

module.exports = router
