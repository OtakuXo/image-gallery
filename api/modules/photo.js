const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      buffer: Buffer,
      type: String,
      required: true,
      unique: true,
    },
    descriptions: {
      type: String,
    },
    catagory: {
      type: [String],
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", photosSchema);
