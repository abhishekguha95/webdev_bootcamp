const mongoose = require('mongoose');
async function dbConnect() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/farmApp');
		console.log('DB connected');
	} catch (err) {
		console.log('DB connection error: ', err);
	}
}

dbConnect();

const productSchema = mongoose.Schema({
	name: String,
	cost: Number,
	category: {
		type: String,
		lowercase: true,
		enum: ['a', 'b', 'c'],
	},
});

const Product = mongoose.model('Product', productSchema);

const seedData = [
	{ name: 'item1', cost: 12.99, category: 'a' },
	{ name: 'item2', cost: 19.99, category: 'b' },
	{ name: 'item3', cost: 45.99, category: 'c' },
	{ name: 'item4', cost: 75.99, category: 'a' },
	{ name: 'item5', cost: 32.99, category: 'b' },
	{ name: 'item6', cost: 56.99, category: 'c' },
	{ name: 'item7', cost: 15.99, category: 'a' },
	{ name: 'item8', cost: 23.99, category: 'b' },
	{ name: 'item9', cost: 50.99, category: 'c' },
	{ name: 'item10', cost: 12.99, category: 'a' },
];

Product.insertMany(seedData)
	.then((data) => {
		console.log('inserted data: ', data);
	})
	.catch((err) => {
		console.log('data insertion error: ', err);
	});
