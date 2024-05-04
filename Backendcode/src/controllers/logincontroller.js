const Login = require("../models/login");

exports.createLogin = async (req, res) => {
  try {
    const { email, name, age, residence } = req.body;

    // Check if the email already exists
    const existingUser = await Login.findOne({ email });

    if (existingUser) {
      return res
        .status(200)
        .json({ message: "User already exists with this email" });
    }

    // Create a new instance of the Login model
    const newLogin = new Login({
      email,
      name,
      age,
      residence,
    });

    // Save the new login data to the database
    const savedLogin = await newLogin.save();

    res.status(201).json(savedLogin); // Respond with the saved login data
  } catch (error) {
    console.error("Failed to create login data:", error);
    res.status(500).json({ error: "Failed to create login data" });
  }
};
