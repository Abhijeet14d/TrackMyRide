const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    body('firstname').isLength({ min: 3 }).withMessage(`Firstname can't be less than 3 characters`),
    body('lastname').optional().isLength({ min: 3 }).withMessage(`Lastname can't be less than 3 characters`),
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 3 }).withMessage(`Password can't be less than 6 characters`),
    body('vehicle.color').isLength({ min: 3 }).withMessage(`Color can't be less than 3 characters`),
    body('vehicle.plate').isLength({ min: 3 }).withMessage(`Plate can't be less than 3 characters`),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage(`Capacity can't be less than 1`),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle Type'),
], captainController.registerCaptain);

module.exports = router;