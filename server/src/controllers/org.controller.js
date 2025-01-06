import status from "http-status";
import Org from "../models/org.model.js";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync.js";

const createWorkType = catchAsync(async (req, res) => {
  const { orgId } = req.params;
  const { text, color } = req.body;
  console.log(text, color);
  if (!text || !color) {
    throw new ApiError(status.BAD_REQUEST, "Name or Color is absent");
  }

  const org = await Org.findById(orgId);
  if (!org) {
    throw new ApiError(status.BAD_REQUEST, "Organisation not exists");
  }
  const isWorkTypeExits = org.workTypes.find(
    (workType) => workType.name === text,
  );

  if (isWorkTypeExits) throw new ApiError(status.BAD_REQUEST, "Work Type Exists");

  org.workTypes.push({
    name: text,
    color,
  });
  await org.save();
  res.status(status.OK).send(org);
});

const getOrg = catchAsync(async (req, res) => {
  const { orgId } = req.params;
  const org = await Org.findById(orgId);

  if (!org) {
    throw new ApiError(status.BAD_REQUEST, "Organisation not exists");
  }
  res.status(status.OK).send(org);
});

export {
  createWorkType,
  getOrg,
};
