const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  edu: {
    type: String,
    required: true,
  },
  familyBg: {
    type: String,
    required: true,
  },
  sm_links: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
