import status from "http-status";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";
import { createUser } from "../services/auth.service.js";

const { BAD_REQUEST, OK, CREATED }  = status

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

export {
  getMembers,
  createMember,
};
