const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  uploadImage,
} = require("../Controller/controller.js");
const upload = require("../multerconfiguration/multerConfiguration.js");

// Route to register a new user
router.post("/create", registerUser);

// Route to log in a user
router.post("/loginUser", loginUser);

router.put("/upload/:userId", upload.single("avatar"), uploadImage);

module.exports = router;
