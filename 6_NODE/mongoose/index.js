const mongoose = require("mongoose");
// const { Schema } = mongoose;

main()
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    cat: {
        type: String, 
        enum: {values: ['a', 'b'], message: ''}
    }
});

const Movie = mongoose.model("Movie", movieSchema);

const newMovie = new Movie({ title: "test2", year: 1995, cat: 'aaa' });

newMovie.save().then((data) => {
    console.log('data: ', data)
}).catch((err) => {
    console.log('insertion error: ', err)
})


