const User = require("../modules/user");
const Image = require("../modules/photo");
const userUploaded = require("../modules/Uploded");
const Collection = require("../modules/collection");

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  if (!user) {
    res.status(404).json({ mag: "user not found" });
  }
  res.status(200).json(user);
};

const uploadPhoto = async (req, res) => {
  await Image.create({
    name: req.file.originalname,
    image: Buffer.from(req.file.buffer).toString("base64"),
    type: req.file.mimetype,
    catagory: req.body.catagory,
  });

  const user = await userUploaded.findOne({ userId: req.user.userId });

  if (!user) {
    await userUploaded.create({
      userId: req.user.userId,
      uploadedImages: [
        {
          name: req.file.originalname,
          image: Buffer.from(req.file.buffer).toString("base64"),
          type: req.file.mimetype,
          catagory: req.body.catagory,
        },
      ],
    });
  } else {
    await userUploaded.findByIdAndUpdate(user._id, {
      $addToSet: {
        uploadedImages: {
          name: req.file.originalname,
          image: Buffer.from(req.file.buffer).toString("base64"),
          type: req.file.mimetype,
          catagory: req.body.catagory,
        },
      },
    });
  }
  res.status(201).json({ msg: "successful upload" });
};

const addToCollection = async (req, res) => {
  const collection = await Collection.findOne({ userId: req.user.userId });
  const image = await Image.findOne({ _id: req.body.id });

  if (!collection) {
    await Collection.create({
      userId: req.user.userId,
      collectedImages: [
        {
          _id: image._id,
          name: image.name,
          image: image.image,
          type: image.type,
          catagory: image.catagory,
        },
      ],
    });
  } else {
    const check = collection.collectedImages.find((i) => i.name === image.name);
    if (check === undefined) {
      await Collection.findByIdAndUpdate(collection._id, {
        $addToSet: {
          collectedImages: {
            _id: image._id,
            name: image.name,
            image: image.image,
            type: image.type,
            catagory: image.catagory,
          },
        },
      });
    } else {
      res.status(200).json({ msg: "alredy exists" });
      throw Error("alredy exists");
    }
    res.status(201).json({ msg: "successfully added to collectiion" });
  }
};

const getUplodedImages = async (req, res) => {
  const uplodedImages = await userUploaded.findOne({ userId: req.user.userId });
  if (!uplodedImages) {
    res.status(401).json({ msg: "something went wrong" });
    throw Error("failed");
  }
  res.status(200).json(uplodedImages);
};

const getCollectedImages = async (req, res) => {
  const collectedImages = await Collection.findOne({ userId: req.user.userId });
  if (!collectedImages) {
    res.status(401).json({ msg: "something went wrong" });
    throw Error("failed");
  }
  res.status(200).json(collectedImages);
};

const updateAvatar = async (req, res) => {
  console.log(req.file);
  await User.findByIdAndUpdate(req.user.userId, {
    $set: {
      avatar: {
        image: Buffer.from(req.file.buffer).toString("base64"),
        type: req.file.mimetype,
      },
    },
  });
  res.status(201).json({ msg: "avatar Updated" });
};

module.exports = {
  getUser,
  updateAvatar,
  uploadPhoto,
  getUplodedImages,
  addToCollection,
  getCollectedImages,
};
