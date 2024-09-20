const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { JWT_SIGN_KEY } = require("../utils/constants");
const bcrypt = require("bcrypt");
const { sendEvent } = require("../app");

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


module.exports = {
  createUser,
  createToken,
  toogleAvailability
};
