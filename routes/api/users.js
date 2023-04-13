const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
