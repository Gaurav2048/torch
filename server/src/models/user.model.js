const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    password: {
      type: String,
      require: true,
    },
    organisation: {
      type: String,
    },
    boards: {
      type: [String],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

userSchema.statics.isEmailTaken = async function (email) {
  return await this.findOne({ email });
};

userSchema.methods.isPasswordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
