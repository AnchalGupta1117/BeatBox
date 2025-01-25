const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
  recentlyPlayed: {
    type: Array,
    default: ['72Aghy1Y', 'DOYdLczc', '3IoDK8qI'], //will remove default songs later
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;