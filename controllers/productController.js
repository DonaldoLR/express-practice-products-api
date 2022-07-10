const Product = require('../models/product');
const mongoose = require('mongoose');

// CREATE

// GET ALL
const getProducts = async (req, res) => {
	const posts = await Product.find({}).sort({ createdAt: -1 });
	res.status(200).json(posts);
};
// GET SINGLE
const getProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Product ID is not valid' });
	}

	const singleProduct = await Product.findById(id);

	if (!singleProduct) {
		return res.status(500).json({ error: 'Unable to find Product' });
	}

	res.status(200).json(singleProduct);
};
// UPDATE

// DELETE

module.exports = {
	getProducts,
	getProduct,
};
