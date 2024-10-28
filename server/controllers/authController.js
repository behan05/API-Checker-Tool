const { User } = require("../models/User");

const signup = async (req, res) => {
    const body = req.body;

    // Validate request body
    if (typeof body !== "object") {
        return res.status(400).json({ error: "Invalid data format" });
    }

    const { 
        userName, 
        email, 
        password, 
        confirmPassword,
        fullName,
        dob,
        phoneNumber } = body;

    // Check required fields
    if (!userName || !email || !password) {
        return res.status(400).json({ error: "All fields are required", details: body });
    }

    try {

        // Create a new user
        const newUser = new User({
            userName: userName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            fullName:fullName,
            dob:dob,
            phoneNumber:phoneNumber

        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: "New user created!", detail: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Server error", details: error.message });
    }
};

module.exports = signup;
