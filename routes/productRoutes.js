const express = require('express');
const {
	getProducts,
	getProduct,
	createProduct,
	updateProduct,
} = require('../controllers/productController');
const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
module.exports = router;
