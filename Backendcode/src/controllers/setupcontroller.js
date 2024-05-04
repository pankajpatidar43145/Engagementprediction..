const SetupVideo = require("../models/Setup");

// Controller function to get all data
const getAllData = async (req, res) => {
  try {
    const data = await SetupVideo.find();
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }
    res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    const updatedTemp = req.body.temp; // Get the new value from the request body

    // Find and update the existing document
    const updatedData = await SetupVideo.findOneAndUpdate(
      {}, // Match any document (since you only have one)
      { $set: { temp: updatedTemp } },
      { new: true } // Return the updated document
    );

    if (!updatedData) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllData, updateData };
