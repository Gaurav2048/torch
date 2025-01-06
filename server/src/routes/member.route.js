import express  from "express";
import {
  getMembers,
  createMember,
} from "../controllers/member.controller.js";

const router = express.Router();

router.get("/:orgId", getMembers);
router.post("/:orgId", createMember);

export default router;
