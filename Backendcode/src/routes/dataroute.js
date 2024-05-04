const express = require("express");
const router = express.Router();
const dataController = require("../controllers/datacontroller");

router.post("/createdata", dataController.createData);

router.get("/getdata", dataController.getAllData);

module.exports = router;
