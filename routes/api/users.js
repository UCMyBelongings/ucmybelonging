const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");

const User = require("../../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is rquired").isEmail(),
    check("password", "Password should be more than 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If there are errors, return a 400 status and the errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure the request body
    const { name, email, password } = req.body;

    try {
      // See if the user with the same email exists
      let user = await User.findOne({ email });
      // If the user attempting to resgister already exists
      if (user) {
        // Send a 400 status and a message
        return res.status(400).json({ msg: "User already exists" });
      }

      // Create a new user
      user = new User({
        name,
        email,
        password,
      });

      // Encrypt the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the user to the database
      await user.save();

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
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          // Send the token to the client
          res.json({ token });
        }
      );

      // Return a user information
      res.json(user);
    } catch (err) {
      // Server internal error sends a 500 status
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
