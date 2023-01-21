const express = require("express");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const mongoose = require("mongoose");
const router = require('./routes')

const app = express();
const PORT = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

async function dbConnect() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/redditApp");
		console.log('DB Connected')
	} catch (err) {
		console.log('DB Connection error: ', err);
	}
	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

dbConnect();

app.use(router)

app.listen(PORT, () => {
	console.log(`app is listening to port ${PORT}`);
});
