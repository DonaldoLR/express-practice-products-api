const express = require('express');
const {
	getProducts,
	getProduct,
	createProduct,
} = require('../controllers/productController');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);

module.exports = router;
