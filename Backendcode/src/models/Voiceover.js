const mongoose = require("mongoose");

const voicevideoSchema = mongoose.Schema({
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

const voiceVideo = mongoose.model("voiceVideo", voicevideoSchema);

module.exports = voiceVideo;
