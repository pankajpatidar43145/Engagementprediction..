const mongoose = require("mongoose");

const RealSchema = mongoose.Schema({
  videoNumber: {
    type: String,
    required: true,
    unique: true,
  },
  videoDescription: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const RealVideo = mongoose.model("RealVideo", RealSchema); // Changed model name

module.exports = RealVideo;
