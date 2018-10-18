//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var OneTimePassSchema = new Schema({
    otpNumber: Number,
    userInfo: [{
    }],
    phoneNumber: String,
    updated: { type: Date, default: Date.now }
});

// Compile model from schema
var OTP = mongoose.model('OTP', OneTimePassSchema );

module.exports = OTP;