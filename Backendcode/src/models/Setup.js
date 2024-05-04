const mongoose = require("mongoose");

const SetupSchema = mongoose.Schema({
  temp: {
    type: String,
    required: true,
    unique: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SetupVideo = mongoose.model("SetupVideo", SetupSchema); // Changed model name

module.exports = SetupVideo;
