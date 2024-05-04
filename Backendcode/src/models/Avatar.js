const mongoose = require("mongoose");

const AvatarSchema = mongoose.Schema({
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

const AvatarVideo = mongoose.model("AvatarVideo", AvatarSchema); // Changed model name

module.exports = AvatarVideo;
