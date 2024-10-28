const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
    fullName: {
        type: String,
    },
    dob: {
        type: String,
    },
    number: {
        type: Number,
    }

}, { timestamps: true });

const User = mongoose.model("signup", userSchema);

module.exports = { User };