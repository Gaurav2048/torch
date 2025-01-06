import User from "../models/user.model.js";
import { createUser, createToken, loginUserWithEmailAndPassword } from "../services/auth.service.js";
import ApiError from "../utils/ApiError.js";
import httpStatus from "http-status";
import catchAsync from "../utils/catchAsync.js";

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

export {
  register,
  login,
  profile
};
