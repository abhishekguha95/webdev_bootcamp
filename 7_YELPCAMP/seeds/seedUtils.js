const mongoose = require('mongoose');
const cities = require('./cities');
const campNames = require('./campNames');
const Campground = require('../models/campground');

async function dbConnect() {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('DB connected');
	} catch (err) {
		console.log('DB connection error: ', err);
	}
}
dbConnect();

/** Returns a random element from given array
 * @param {array} arr - array
 */
const randomIndexElement = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

const seedDataToDB = async () => {
	try {
		await Campground.deleteMany({}).exec();
		for (let i = 0; i < 50; i++) {
			const campLocation = randomIndexElement(cities);
			const campName =
				randomIndexElement(campNames.descriptors) +
				' ' +
				randomIndexElement(campNames.places);
			const camp = new Campground({
				name: campName,
				location: `${campLocation.city}, ${campLocation.state}`,
			});

			const savedCamp = await camp.save();
			console.log('savedDoc: ', i, savedCamp);
		}
	} catch (err) {
		console.log('error in inserting document into DB: ', err);
	}
};

seedDataToDB()
	.then(() => {
		console.log('seeded data into DB');
		mongoose.connection.close();
	})
	.catch((err) => {
		console.log('error in seed operation: ', err);
	});
