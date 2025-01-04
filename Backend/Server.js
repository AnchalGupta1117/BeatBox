const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const signup = require('./routes/auth/signup.js');
const login = require('./routes/auth/login.js');
const logout = require('./routes/auth/logout.js');
const connectDB = require('./Database/connect.js');
const mongoose = require("mongoose");
const app = express();
const port = 3000;
require('dotenv').config();

connectDB();

// Middleware to parse JSON and URL-encoded data...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure session
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY === 'true'}
};

app.use(session(sessionConfig));

app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  console.log(`Server is running on http://localhost:${port}`);
});
