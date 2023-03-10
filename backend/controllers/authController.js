
const authController = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// REGISTER
authController.post('/register', async (req, res) => {
    try{
        // check if user already exists
        const isExisting = await User.findOne({email: req.body.email});
        if(isExisting){
            throw new Error("User already exists with this email..");

        }
        // hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // create new user
        const newUser = await User.create({...req.body, password: hashedPassword});

        // get the user without password
        const {password, ...others} = newUser._doc;

        // create jwt token
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

        // send response
        return res.status(201).json({others, token});
    }catch(error){
        return res.status(500).json(error.message);
    }
});

// LOGIN
authController.post('/login', async (req, res) => {      

    // check if user exists with this email address in database               
    try{
        const user = await User.findOne({email: req.body.email});

        if(!user){
            throw new Error("User not found with this email address..");
        }
        const comparePass= await bcrypt.compare(req.body.password, user.password);
        if(!comparePass){
            throw new Error("Password is incorrect..");
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "4h"});
        const {password, ...others} = user._doc;

        return res.status(200).json({others, token});


    }catch(error){
        return res.status(500).json(error.message);
    }
});
module.exports = authController
