const express = require("express");
const router = express.Router();
const loginController = require("../controllers/logincontroller");
const VoiceoverController = require("../controllers/voiceovercontroller");
const AvatarController = require("../controllers/avatarcontroller");
const RealController = require("../controllers/realteachercontroller");
const SetupController = require("../controllers/setupcontroller");

router.post("/create", loginController.createLogin);

router.get("/getvoice", VoiceoverController.getAllVideos);

router.get("/getavatar", AvatarController.getAllData);

router.get("/getreal", RealController.getAllData);

router.get("/getstring", SetupController.getAllData);
router.post("/updatedata", SetupController.updateData);

module.exports = router;
