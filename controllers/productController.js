const Product = require('../models/product');
const mongoose = require('mongoose');

// CREATE

// GET ALL
const getProducts = async (req, res) => {
	const posts = await Product.find({}).sort({ createdAt: -1 });
	res.status(200).json(posts);
};
// GET SINGLE

// UPDATE

// DELETE

module.exports = {
	getProducts,
};
