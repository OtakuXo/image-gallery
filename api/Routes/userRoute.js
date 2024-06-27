const express = require("express");
const router = express.Router();
const {
  getUser,
  updateAvatar,
  uploadPhoto,
  getUplodedImages,
  addToCollection,
  getCollectedImages,
} = require("../controller/user");

const upload = require("../middleware/photo");

router.route("/").get(getUser);
router
  .route("/upload")
  .post(upload.single("image"), uploadPhoto)
  .get(getUplodedImages);
router.route("/avatar").post(upload.single("image"), updateAvatar);
router.route("/collection").post(addToCollection).get(getCollectedImages);

module.exports = router;
