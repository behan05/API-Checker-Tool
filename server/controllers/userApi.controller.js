const { stat } = require("fs");
const { User } = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.setHeader("content-Type", "application/json");
        return res.status(200).json({ getUser: { allUsers } })
    } catch (error) {
        console.error("Error: getting error during fetching data from the database", error.message);

        // It's more appropriate to use 500 for server errors
        return res.status(500).json({ error: "Error fetching users" });
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);

    try {
        if (user) {
            res.setHeader("content-Type", "application/json");
            return res.status(200).json({ GetUser: user });

        } else {
            res.setHeader("content-Type", "application/json");
            return res.status(404).json({ message: "user not found!" });
        }
    } catch (error) {
        console.error("user not found: " + error.message);
        res.setHeader("content-Type", "application/json");
        return res.status(500).json({ error: "server error!" })
    }
}

const updateUserById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);

        if (!user) {
            res.setHeader("content-Type", "application/json");
            return res.status(404).json({ error: "user not found!" });

        } else {
            // Update the user with the request body
            const updatedUser = await User.findByIdAndUpdate(id, req.body, {
                new: true, // Return the updated user
                runValidators: true // Ensure validators are run on update
            });
            res.setHeader("content-Type", "application/json");
            return res.status(200).json({ UpdatedUserRequest: updatedUser });
        }
    } catch (error) {
        console.error("Error updating user: " + error.message);
        res.status(500).json({ error: "Server error!" }); // Handle server errors
    }

}

const createNewUser = async (req, res) => {

    try {
        const { userName, email, password, confirmPassword, fullName, dob } = req.body;

        if (!userName || !email || !password || !confirmPassword || !fullName || !dob) {
            res.setHeader("content-Type", "application/json");
            return res.status(400).json({ error: "All field required" });
        }

        // Optional: Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match." });
        }

        else {
            const createNewUserByUser = new User({
                userName,
                email,
                password,
                confirmPassword,
                fullName,
                dob
            });

            await createNewUserByUser.save();
            res.setHeader("content-Type", "application/json");
            return res.status(201).json({ message: "new user created!", Userdetail: createNewUserByUser });
        }
    } catch (error) {
        console.error("server error during creating new user!", error.message)
        res.setHeader("contant-Type", "application/json");
        return res.status(500).json({ error: "server error during creating new user!", errorDetail: error.message });
    }
}

module.exports = { getAllUsers, getUserById, updateUserById, createNewUser };