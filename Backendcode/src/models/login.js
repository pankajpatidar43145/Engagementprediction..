const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures uniqueness of email addresses
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number, // Assuming age is represented as a number
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Login", loginSchema);
