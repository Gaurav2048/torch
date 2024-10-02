const User = require("../models/user.model");
const { createUser, createToken, loginUserWithEmailAndPassword } = require("../services/auth.service");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res) => {
  const userBody = req.body;

  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User already exists");
  }

  const user = await createUser(userBody);
  const token = createToken(user.email);
  return res.status(httpStatus.CREATED).send({
    ...user._doc,
    token,
  });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body
  const user = await loginUserWithEmailAndPassword(email, password)
  res.status(200).send(user)
});

const profile = catchAsync(async (req, res) => {
  const { email } = req.user;
  const dbUser = await User.findOne({
    email
  })
  res.status(200).send(dbUser)
})

module.exports = {
  register,
  login,
  profile
};
