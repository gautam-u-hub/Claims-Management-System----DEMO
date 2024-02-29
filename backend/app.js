const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const cors = require("cors"); // Importing CORS

app.use(express.json());
app.use(cookieParser());

// Allow all origins
app.use(cors());

// Route Imports
const userRoutes = require("./routes/userRoutes");
const policyRoutes = require("./routes/policyRoutes");
const claimRoutes = require("./routes/claimRoutes");
app.use("", userRoutes);
app.use("", policyRoutes);
app.use("", claimRoutes);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
