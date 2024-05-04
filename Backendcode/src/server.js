const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // Import bodyParser

// Import routes
const LoginDataRoutes = require("./routes/loginroute");
const DataRoutes = require("./routes/dataroute");

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://pankajpatidar43145:cGYUIYTnBsibvjm3@cluster0.radhfpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");

    // Body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Use Timestamp routes
    app.use("/Logindata", LoginDataRoutes);
    app.use("/user", DataRoutes);
    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });
