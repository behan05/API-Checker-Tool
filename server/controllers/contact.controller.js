// Import the UserContact model
const { UserContact } = require("../models/contact.model");

const contact = async (req, res) => {
    const { name, email, userMessage } = req.body;

    try {
        // Check for required fields
        if (!name || !email || !userMessage) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        // Create a new contact request
        const userRequestToConnect = new UserContact({
            name,
            email,
            userMessage
        });

        // Save the new request to the database
        await userRequestToConnect.save();

        res.status(201).json({ message: "Your message has been received!" });
    } catch (error) {
        console.error("Error processing contact request:", error.message);
        res.status(500).json({ error: "An error occurred. Please try again later." });
    }
}

module.exports = { contact };
