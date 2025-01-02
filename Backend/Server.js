const express = require("express");
const app = express();
const mongoose= require('mongoose');
const connectDB=require('./Database/connect.js')
const port = 3000;


connectDB();
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  console.log(`server is running on http://localhost:${port}`);
});

