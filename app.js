// app.js
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Set EJS as the template engine
app.set('views', './views');

// Set public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Body-parser middleware
app.use(express.urlencoded({ extended: true }));

// Session handling
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/index'));  // Homepage, About, etc.
app.use('/users', require('./routes/users')); // User-related routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
