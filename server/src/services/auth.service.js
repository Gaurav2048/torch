const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { JWT_SIGN_KEY } = require("../utils/constants");
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  const hashedPassword = bcrypt.hashSync(user.password, 10);
  return await User.create({
    ...user,
    password: hashedPassword,
  });
};

const createToken = (email) => {
  return jwt.sign({ email }, JWT_SIGN_KEY);
};

module.exports = {
  createUser,
  createToken,
};
