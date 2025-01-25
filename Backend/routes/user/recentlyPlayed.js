const express = require('express');
const router = express.Router();
const { checkAuthentication } = require('../../middleware/auth');
const User = require('../../models/user');

router.put('/', checkAuthentication, async (req, res) => {
  try {
    const { songId, userId } = req.body;

    if (!songId) {
      return res.status(400).json({ message: 'Song ID is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.recentlyPlayed.includes(songId)) {
      user.recentlyPlayed.push(songId);
      await user.save();
    }

    res.status(200).json({
      message: 'Song added to Recently played songs',
      recentlyPlayed: user.recentlyPlayed,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

router.get('/', checkAuthentication, async (req, res) => {
  try {
    const userId = req.body.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'Recently Played songs retrieved successfully',
      recentlyPlayed: user.recentlyPlayed,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;