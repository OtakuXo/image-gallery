const mongoose = require("mongoose");

const userUploadedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Mixed,
      required: true,
    },
    uploadedImages: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          buffer: Buffer,
          type: String,
          unique: true,
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

module.exports = mongoose.model("userUploaded", userUploadedSchema);
