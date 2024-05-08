const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    role: {
      type: String,
      required: true,
    },
    Create: {
      default: false,
      type: Boolean,
    },
    Read: {
      default: false,
      type: Boolean,
    },
    Update: {
      default: false,
      type: Boolean,
    },
    Delete: {
      default: false,
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userSchema);
module.exports = user;
