const userModel = require('../models/user.model');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader ? authHeader.split(' ')[1] : req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isBlackListed = await blacklistTokenModel.findOne({ token: token });
    if(isBlackListed){
        return res.status(401).json({message: 'Unauthorized access'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id);
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports.authCaptain = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader ? authHeader.split(' ')[1] : req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isBlackListed = await blacklistTokenModel.findOne({ token: token });
    if(isBlackListed){
        return res.status(401).json({message: 'Unauthorized access'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.captain = await userCaptain.findById(decoded._id);
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
}