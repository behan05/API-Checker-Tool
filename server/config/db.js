const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variable.
dotenv.config();

// promise to connect with database.
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected!")
    } catch (error) {
        console.error("Fail to connect database", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
