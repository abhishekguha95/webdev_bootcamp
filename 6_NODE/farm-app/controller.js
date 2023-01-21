const Product = require('./models/product');

const productController = async function (req, res) {
	try {
		console.log('in productController');
		const allProducts = await Product.find({}).exec();
		res.render('products', { allProducts });
	} catch (err) {
		console.log('error in productController');
	}
};

const productDetailsController = async function (req, res) {
	try {
		console.log('in productDetailsController');
		const productID = req.params.id;
		const product = await Product.findById(productID).exec();
		res.status(200).render('details', { product });
	} catch (err) {
		console.log('error in productDetailsController');
	}
};

const createProductController = async function (req, res) {
	try {
		console.log('in createProductController');
		res.render('create');
	} catch (err) {
		console.log('error in createProductController');
	}
};

const addProductController = async function (req, res) {
	try {
		console.log('in addProductController');
		const productData = req.body;
		const newProduct = await Product.create(productData);
		console.log('newProduct: ', newProduct);
		res.render('details', { product: newProduct });
	} catch (err) {
		console.log('error in addProductController');
	}
};

const editProductController = async function (req, res) {
	try {
		console.log('in editProductController');
		const productID = req.params.id;
		const product = await Product.findById(productID).exec();
		res.render('edit', { product });
	} catch (err) {
		console.log('error in editProductController');
	}
};

const updateProductController = async function (req, res) {
	try {
		console.log('in updateProductController');
		const productData = req.body;
		const productID = req.params.id;
		const updatedProduct = await Product.findByIdAndUpdate(
			productID,
			{
				name: productData.name,
				cost: parseFloat(productData.cost),
				category: productData.category,
			},
			{
				returnDocument: 'after',
			}
		).exec();
		console.log('updatedProduct: ', updatedProduct);
		res.render('details', { product: updatedProduct });
	} catch (err) {
		console.log('error in updateProductController', err);
	}
};

const deleteProductController = async function (req, res) {
	try {
		console.log('in deleteProductController');

		res.redirect('');
	} catch (err) {
		console.log('error in deleteProductController');
	}
};

module.exports = {
	productController,
	productDetailsController,
	createProductController,
	addProductController,
	editProductController,
	updateProductController,
	deleteProductController,
};
