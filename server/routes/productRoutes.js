const { getProducts, getProduct } = require('../controllers/productController')

const router = require('express').Router()



router.get('/:category', getProducts)
router.get('/product/:id', getProduct)

module.exports = router