import express from "express";
import { createWorkType, getOrg } from "../controllers/org.controller.js";

const router = express.Router();

router.post("/:orgId/worktype", createWorkType);
router.get("/:orgId", getOrg);

export default router;
