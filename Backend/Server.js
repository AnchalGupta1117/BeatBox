const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./Database/connect');
const signup = require('./routes/auth/signup');
const login = require('./routes/auth/login');
const logout = require('./routes/auth/logout');
const favourites = require('./routes/user/favourites');
const recentlyPlayed = require('./routes/user/recentlyPlayed');
const profile = require('./routes/user/profile');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;
const frontendURL = process.env.FRONTEND_URL;

connectDB();

// Middleware to parse JSON and URL-encoded data...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: frontendURL,
    credentials: true,
  })
);

app.use('/signup', signup);
app.use('/login', login);
app.use('/logout', logout);
app.use('/favourites', favourites);
app.use('/profile', profile);
app.use('/recent', recentlyPlayed);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  console.log(`Server is running on http://localhost:${port}`);
});