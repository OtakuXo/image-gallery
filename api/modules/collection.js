const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Mixed,
      required: true,
    },
    collectedImages: [
      {
        _id: { type: mongoose.Mixed },
        name: {
          type: String,
          required: true,
        },
        image: {
          buffer: Buffer,
          type: String,
          required: true,
        },
        catagory: [
          {
            type: String,
            required: true,
          },
        ],
        type: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collection", collectionSchema);
