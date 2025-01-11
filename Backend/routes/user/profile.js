const express = require("express");
const User = require("../../models/user");
const { checkAuthentication } = require("../../middleware/auth");
const router = express.Router();

router.get("/", checkAuthentication, async (req, res) => {
  try {
    const userId = req.session.userId;


    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;