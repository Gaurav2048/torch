const { UNAUTHORIZED } = require("http-status");

const isAdmin = (req, res, next) => {
  const user = req.user;
  if (user.role === "admin") {
    next();
  } else {
    res.status(UNAUTHORIZED).send({
      message: "No authorised access.",
    });
  }
};

export default isAdmin;
