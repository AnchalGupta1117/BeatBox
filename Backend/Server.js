const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const signup = require('./routes/auth/signup.js');
const login = require('./routes/auth/login.js');
const connectDB = require('./Database/connect.js');
const mongoose = require("mongoose");
const app = express();
const port = 3000;

connectDB();

// Middleware to parse JSON and URL-encoded data...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure session
const sessionConfig = {
  secret: 'thisshouldbeabettersecret!', 
  resave: false,                        
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), 
    maxAge: 1000 * 60 * 60 * 24 * 7,     
  },
};
app.use(session(sessionConfig));

app.use('/signup', signup);
app.use('/login', login);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  console.log(`Server is running on http://localhost:${port}`);
});
