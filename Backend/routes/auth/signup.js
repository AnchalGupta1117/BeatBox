const express = require("express");
const bcrypt = require("bcryptjs");
const { signupSchema } = require("../../Validations/validation");
const User = require("../../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Request Body:", req.body);

  try {
    const { error } = signupSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message, // to only send the first validation error message
        status: 400,
      });
    }

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({
        message: "Email already registered",
        status: 400,
      });
    }
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
      name,
      email,
      password: hash,
    });

    await user.save();
    req.session.userId = user._id;
    res.json({
      message: "User registered successfully",
      status: 200,
    });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({
      message: "Internal server error",
      status: 500,
    });
  }
});

module.exports = router;