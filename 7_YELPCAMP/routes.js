const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
	res.render('home');
});

router.get('/campgrounds', controller.listAllCampgroundsController);

router.get('/campground/:id', controller.campgroundDetailsController);

router.get('/new-campground', controller.createCampgroundController);

router.post('/new-campground', controller.addCampgroundController);

router.get('/campground/:id/edit', controller.editCampgroundController);

router.put('/campground/:id/edit', controller.updateCampgroundController);

router.delete('/campground/:id', controller.deleteCampgroundController);

module.exports = router;
