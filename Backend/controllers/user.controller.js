const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { firstname, lastname, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    
    if(exists){
        return res.status(401).json({message: 'User already exists'});
    }
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({ 
        firstname,
        lastname: lastname || '',
        email,
        password: hashedPassword 
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
    res.cookie('token', token);
    console.log("User logged in successfully");
    res.status(200).json({user, token});
};

module.exports.getUserProfile = async(req,res,next) =>{
    res.status(200).json(req.user);
};

module.exports.logoutUser = async(req,res,next) =>{
    res.clearCookie('token');
    const authHeader = req.headers.authorization;
    const token = req.cookies.token || authHeader.split(' ')[1];
    await blacklistTokenModel.create({token});
    res.status(200).json({message: 'User logged out successfully'}); 
};