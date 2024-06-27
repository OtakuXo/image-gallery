const express = require("express");
const router = express.Router();
const { getPhotos, getSingleImage } = require("../controller/photos");

router.route("/").get(getPhotos);
router.route("/:id").get(getSingleImage);

module.exports = router;
