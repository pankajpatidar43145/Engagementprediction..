const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  engagement: {
    type: String,
    required: true,
  },
  videoNumber: {
    type: String,
    required: true,
  },
  videoType: {
    type: String,
    required: true,
  },
  videostring: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Data", dataSchema);
