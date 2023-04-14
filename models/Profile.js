const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  contact: {
    type: String,
    required: true,
  },
  year: {
    type: String,
  },
  college: {
    type: String,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
