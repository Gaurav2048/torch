const { BAD_REQUEST, OK } = require("http-status");
const Org = require("../models/org.model");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const createWorkType = catchAsync(async (req, res) => {
  const { orgId } = req.params;
  const { text, color } = req.body;
  console.log(text, color);
  if (!text || !color) {
    throw new ApiError(BAD_REQUEST, "Name or Color is absent");
  }

  const org = await Org.findById(orgId);
  if (!org) {
    throw new ApiError(BAD_REQUEST, "Organisation not exists");
  }
  const isWorkTypeExits = org.workTypes.find(
    (workType) => workType.name === text,
  );

  if (isWorkTypeExits) throw new ApiError(BAD_REQUEST, "Work Type Exists");

  org.workTypes.push({
    name: text,
    color,
  });
  await org.save();
  res.status(OK).send(org);
});

const getOrg = catchAsync(async (req, res) => {
  const { orgId } = req.params;
  const org = await Org.findById(orgId);

  if (!org) {
    throw new ApiError(BAD_REQUEST, "Organisation not exists");
  }
  res.status(OK).send(org);
});

module.exports = {
  createWorkType,
  getOrg,
};
