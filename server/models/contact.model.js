const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    userMessage: {
        type: String,
    },

}, { timestamps: true });

const UserContact = mongoose.model("userContact", contactSchema);

module.exports = { UserContact };