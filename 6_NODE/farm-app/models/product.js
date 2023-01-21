const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
	name: String,
	cost: Number,
	category: {
		type: String,
		lowercase: true,
		enum: ['a', 'b', 'c'],
	},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
