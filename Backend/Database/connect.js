const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.MONGO_URL); // remove this after you've confirmed it is working



const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,      // Helps handle connection strings properly
        useUnifiedTopology: true    // Ensures the connection process is more stable
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error Connecting to mongo: ${error.message}`);
      process.exit(1);              // Exits the app if the connection fails
    }
  };


  module.exports = connectDB;
