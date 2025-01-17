const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: [3, `Firstname can't be less than 3 characters`],
    },
    lastname: {
        type: String,
        minlength: [3, `Lastname can't be less than 3 characters`],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Invalid Email'],
    },
    password: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['offline', 'online'],
        default: 'offline',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, `Color can't be less than 3 characters`],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, `Plate can't be less than 3 characters`],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, `Capacity can't be less than 1`],
        },
        vehicleType: {
            type: String,
            enum: ['car', 'motorcycle', 'auto'],
            required: true,
        },
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;