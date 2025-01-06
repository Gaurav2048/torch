import { REQUEST_TOKEN_LOCATION, JWT_SIGN_KEY } from "../utils/constants.js";
import httpStatus from "http-status";

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const auth = async (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers[REQUEST_TOKEN_LOCATION],
      JWT_SIGN_KEY,
    );
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      res.status(httpStatus.BAD_REQUEST).send({ message: "No user found" });
      return;
    }
    req.user = user._doc;
    next();
  } catch (e) {
    next(e);
  }
};

export default auth;
