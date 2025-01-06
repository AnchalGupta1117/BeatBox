const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./Database/connect');  // No need for '.js' extension
const signup = require('./routes/auth/signup');
const login = require('./routes/auth/login');
const logout = require('./routes/auth/logout');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = process.env.PORT;
const frontendURL = process.env.FRONTEND_URL;

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
app.use(cors({ origin: frontendURL, credentials: true }));

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
