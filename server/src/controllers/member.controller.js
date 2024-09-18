const { BAD_REQUEST, OK, CREATED } = require("http-status");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { createUser } = require("../services/auth.service");

const getMembers = catchAsync(async (req, res) => {
  const { orgId: organisation } = req.params;
  const members = await User.find({ organisation });
  if (!members) {
    throw new ApiError(BAD_REQUEST, "No members found!");
  }
  res.status(OK).send(members);
});

const createMember = catchAsync(async (req, res) => {
  const { orgId: organisation } = req.params;
  const member = req.body;

  const user = await createUser({
    ...member,
    role: "user",
    organisation,
  });
  res.status(CREATED).send(user);
});

module.exports = {
  getMembers,
  createMember,
};
