const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const auth = require("../../middleware/auth");

const User = require("../../models/User");

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If there are errors, return a 400 status and the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure the request body
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      // If the user attempting to login does not exist
      if (!user) {
        // Send a 400 status and a message
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Create a payload
      const payload = {
        user: {
          id: user.id,
        },
      };

      // Sign the token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
