const Data = require("../models/Data");

exports.createData = async (req, res) => {
  try {
    const { email, engagement, videoNumber, videoType, videostring } = req.body;

    const newData = new Data({
      email,
      engagement,
      videoNumber,
      videoType,
      videostring,
    });

    const savedData = await newData.save();

    res.status(201).json(savedData);
  } catch (error) {
    console.error("Failed to create data:", error);
    res.status(500).json({ error: "Failed to create data" });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};
