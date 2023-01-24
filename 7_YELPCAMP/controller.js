const Campground = require('./models/campground');

const listAllCampgroundsController = async function (req, res) {
	try {
		console.log('in listAllCampgroundsController');
		const allCampgrounds = await Campground.find({}).exec();
		res.render('campgroundsList', { allCampgrounds });
	} catch (err) {
		console.log('error in listAllCampgroundsController');
	}
};

const campgroundDetailsController = async function (req, res) {
	try {
		console.log('in campgroundDetailsController');
		const campgroundID = req.params.id;
		const campground = await Campground.findById(campgroundID).exec();
		res.render('details', { campground });
	} catch (err) {
		console.log('error in campgroundDetailsController');
	}
};

const createCampgroundController = async function (req, res) {
	try {
		console.log('in createCampgroundController');
		res.render('create');
	} catch (err) {
		console.log('error in createCampgroundController');
	}
};

const addCampgroundController = async function (req, res) {
	try {
		console.log('in addCampgroundController');
		const formData = req.body;
		const newCampground = await Campground.create(formData);
		console.log('newCampground: ', newCampground);
		res.render('details', { campground: newCampground });
	} catch (err) {
		console.log('error in addCampgroundController');
	}
};

const editCampgroundController = async function (req, res) {
	try {
		console.log('in editCampgroundController');
		const campgroundID = req.params.id;
		const campground = await Campground.findById(campgroundID).exec();
		res.render('edit', { campground });
	} catch (err) {
		console.log('error in editCampgroundController');
	}
};

const updateCampgroundController = async function (req, res) {
	try {
		console.log('in updateCampgroundController');
		const formData = req.body;
		const campgroundID = req.params.id;
		const updatedCampground = await Campground.findByIdAndUpdate(
			campgroundID,
			{
				name: formData.name,
				price: parseFloat(formData.price),
				description: formData.description,
			},
			{
				returnDocument: 'after',
			}
		).exec();
		console.log('updatedCampground: ', updatedCampground);
		res.redirect(`/campground/${campgroundID}`);
	} catch (err) {
		console.log('error in updateCampgroundController', err);
	}
};

const deleteCampgroundController = async function (req, res) {
	try {
		console.log('in deleteCampgroundController');
		const campgroundID = req.params.id;
		const deletedCampground = await Campground.findByIdAndDelete(
			campgroundID
		).exec();
		console.log('deletedCampground: ', deletedCampground);
		res.redirect('/campgrounds');
	} catch (err) {
		console.log('error in deleteCampgroundController');
	}
};

module.exports = {
	listAllCampgroundsController,
	campgroundDetailsController,
	createCampgroundController,
	addCampgroundController,
	editCampgroundController,
	updateCampgroundController,
	deleteCampgroundController,
};
