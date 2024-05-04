const RealVideo = require("../models/Real");

// Controller function to get all data
const getAllData = async (req, res) => {
  try {
    // Fetch all data from the AvatarVideo collection
    const data = await RealVideo.find();

    // If no data found, return a 404 status
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    // If data found, return it with a 200 status
    res.status(200).json(data);
  } catch (error) {
    // If an error occurs, return a 500 status with the error message
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllData };
