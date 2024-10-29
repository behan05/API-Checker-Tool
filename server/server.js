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
const contactRoute = require("./routes/contactRoute");
const userAPI = require("./routes/users.api");

// attached all routes with prefix.
app.use("/api/auth", routes);
app.use("/api/support", contactRoute);
app.use("/api/data", userAPI);

// PORT is initially in Development mode.
const PORT = process.env.PORT || 3000;

// server listen for request on provided PORT.
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
