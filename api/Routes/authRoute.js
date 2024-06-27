const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/auth");

router.route("/auth").post(register);
router.route("/login").post(login);

module.exports = router;
