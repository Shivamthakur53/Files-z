const express = require("express");
const { registerUser, loginUser } = require("../Controller/controller.js");

const app = express();

const router = express.Router();

router.post("/create", registerUser);
router.post("/loginUser", loginUser);
module.exports = router;
