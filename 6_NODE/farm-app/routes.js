const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
	res.status(200).render('home.ejs');
});

router.get('/products', controller.productController);

router.get('/product/:id', controller.productDetailsController);

router.get('/new-product', controller.createProductController);

router.post('/new-product', controller.addProductController);

router.get('/product/:id/edit', controller.editProductController);

router.post('/product/:id/edit', controller.updateProductController);

router.delete('/product/:id', controller.deleteProductController);

module.exports = router;
