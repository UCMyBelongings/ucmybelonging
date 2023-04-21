const express = require("express");
const axios = require("axios");
const config = require("config");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const checkObjectById = require("../../middleware/checkObjectId");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    // Find the profile by the user id
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name"]);

    // Cannot find -> return error
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    // Return the profile
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/profile
// @desc   Create or update user profile
// @access Private
router.post(
  "/",
  auth,
  check("contact", "Contact is required").notEmpty(),
  check("contact", "Contact number is invalid").isMobilePhone(),
  async (req, res) => {
    // Check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Get the fields
    const { contact, year, college } = req.body;

    // Build profile object
    const profileFields = { user: req.user.id, contact, year, college };
    try {
      // update profile
      let profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @router GET api/profile/user/:user_id
// @desc   Get profile by user ID
// @access Public
router.get(
  "/user/:user_id",
  checkObjectById("user_id"),
  async ({ params: { user_id } }, res) => {
    try {
      // Find the profile by the user id
      const profile = await Profile.findOne({ user: user_id }).populate(
        "user",
        ["name"]
      );

      // Cannot find -> return error
      if (!profile) return res.status(400).json({ msg: "Profile not found" });

      // Return the profile if profile is found
      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
