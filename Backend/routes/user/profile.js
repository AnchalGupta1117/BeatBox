const express = require("express");
const User = require("../../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(200).json({ message: "Not signed in" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(200).json({ message: "User not found" });
    }

    res.json({ user, status: "success" });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;