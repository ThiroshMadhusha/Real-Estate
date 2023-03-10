
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

const authController = require('./controllers/authController')
const propertyController = require('./controllers/propertyController')



// mongodb connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, () => console.log("MongoDB has been Started.."))

// routes & middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// controllers
app.use("/auth", authController);
app.use("/property", propertyController);

// start server
app.listen(process.env.PORT, () => console.log("Server has been started.."))