const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Connect Database.
connectDB();

const cors = require('cors');
app.use(cors());

// load environment variable.
dotenv.config();

// middleware, every coming request go through this middleware.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// require routes folder
const routes = require("./routes/userAuth");

// attached all routes with prefix.
app.use("/api/auth", routes);

// PORT is initially in Development mode.
const PORT = process.env.PORT || 3000;

// server listen for request on provided PORT.
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
