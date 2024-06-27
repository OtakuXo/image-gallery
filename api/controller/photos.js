const Image = require("../modules/photo");
const auth = require("../middleware/auth");

const getPhotos = async (req, res) => {
  const image = await Image.find({});
  res.status(200).json(image);
};

const getSingleImage = async (req, res) => {
  const imageid = req.params.id;
  const hero = await Image.findOne({ _id: imageid });
  const recomend = await Image.find({});

  if (!hero) {
    res.status(404).json({ mag: "not found" });
  }
  res.status(200).json({ heroImage: hero, recomendImage: recomend });
};

module.exports = { getPhotos, getSingleImage };
