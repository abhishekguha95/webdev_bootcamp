const express = require("express");
const path = require("path");

const ejs = require('ejs');
const router = require("./routes");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

const mongoose = require("mongoose");
async function dbConnect() {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/farmApp");
		console.log("DB connected");
	} catch (err) {
		console.log("DB connection error: ", err);
	}
}
dbConnect();

app.use(router);
app.listen(3000, () => {
	console.log("app is listening to port 3000");
});
