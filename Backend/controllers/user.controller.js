const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;
    if(userModel.findOne({email})){
        return res.status(401).json({message: 'User already exists'});
    }
    const hasedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({ 
        firstname,
        lastname: lastname || '',
        email,
        password: hasedPassword 
    });
    const token = user.generateAuthToken();
    console.log("User registered successfully");
    
    res.status(201).json({ user, token });
};

module.exports.loginUser = async(req,res, next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;
    const user =  await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const token = user.generateAuthToken();
    console.log("User logged in successfully");
    res.status(200).json({user, token});
};