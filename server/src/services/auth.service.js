import User  from "../models/user.model.js";
import jwt  from "jsonwebtoken";
import { JWT_SIGN_KEY }  from "../utils/constants.js";
import bcrypt  from "bcrypt";
import ApiError  from "../utils/ApiError.js";
import status  from "http-status";

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
    throw new ApiError(status.BAD_REQUEST, "User not found")
  }
  const isPasswordMatch = await bcrypt.compare(password, dbUser.password)
  if (!isPasswordMatch) {
    throw new ApiError(status.BAD_REQUEST, "Password mismatch")
  }
  const token = createToken(email)
  return {
    ...dbUser._doc, 
    token
  }
} 


export {
  createUser,
  createToken,
  loginUserWithEmailAndPassword,
  toogleAvailability
};
