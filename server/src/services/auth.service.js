const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { JWT_SIGN_KEY } = require("../utils/constants");
const bcrypt = require("bcrypt");
const { sendEvent } = require("../app");
const ApiError = require("../utils/ApiError");
const { BAD_REQUEST } = require("http-status");

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

const toogleAvailability = async (io, organizationId, userId, available) => {
  const user = await User.findById(userId)
  user.online = available
  await user.save()
  // sendEvent(organizationId, 'organizationUpdate_avaliablity', {
  //   userId,
  //   available
  // })
  io.to(organizationId).emit('organizationUpdate_avaliablity', {
    userId,
    available
  });
}

const loginUserWithEmailAndPassword = async (email, password) => {
  const dbUser = await User.findOne({
    email
  })
  if (!dbUser) {
    throw new ApiError(BAD_REQUEST, "User not found")
  }
  const isPasswordMatch = await bcrypt.compare(password, dbUser.password)
  if (!isPasswordMatch) {
    throw new ApiError(BAD_REQUEST, "Password mismatch")
  }
  const token = createToken(email)
  return {
    ...dbUser._doc, 
    token
  }
} 


module.exports = {
  createUser,
  createToken,
  loginUserWithEmailAndPassword,
  toogleAvailability
};
