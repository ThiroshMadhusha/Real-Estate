
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController');
const uploadController = require('./controllers/uploadController');



// mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, () => console.log("MongoDB has been Started.."))

// routes & middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// add images
// http://localhost:5000/images/
app.use('/images', express.static('public/images'));

// user auth controllers
app.use("/auth", authController);

// property controllers
app.use("/property", propertyController);

// image upload controller
app.use("/upload", uploadController);

// start server
app.listen(process.env.PORT, () => console.log("Server has been started.."))