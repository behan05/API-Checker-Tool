const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

//  import and run this database connection
const connectDB = require('./config/db');
connectDB();

// Middleware (e.g., JSON parsing)
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

// Use Routes
app.use('/api/auth', authRoutes);  // For authentication routes
app.use('/api/chat', chatRoutes);  // For chat-related routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
