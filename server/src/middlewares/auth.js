const { REQUEST_TOKEN_LOCATION, JWT_SIGN_KEY } = require("../utils/constants");
const httpStatus = require("http-status");

const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const auth = async (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.header[REQUEST_TOKEN_LOCATION],
      JWT_SIGN_KEY,
    );
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      res.status(httpStatus.BAD_REQUEST).send({ message: "No user found" });
      return;
    }
    res.user = user._doc;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = auth;
