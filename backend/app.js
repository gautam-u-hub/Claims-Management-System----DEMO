const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Importing CORS

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000', // Replace with the URL of your React app
    credentials: true
}));


// Route Imports
const userRoutes = require("./routes/userRoutes");
const policyRoutes = require("./routes/policyRoutes");
const claimRoutes = require("./routes/claimRoutes");
app.get('/set-cookie', (req, res) => {
    // Set cookie
    res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
    res.send('Cookie set successfully');
});
app.use("", userRoutes);
app.use("", policyRoutes);
app.use("", claimRoutes);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
