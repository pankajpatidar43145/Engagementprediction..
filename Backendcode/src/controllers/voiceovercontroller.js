const VoiceVideo = require("../models/Voiceover");

// Controller function to get all data
async function getAllVideos(req, res) {
  try {
    const videos = await VoiceVideo.find({});
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllVideos };
