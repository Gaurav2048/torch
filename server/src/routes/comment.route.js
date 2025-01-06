import express  from "express";
import {
  getComments,
  createComment,
  replyToComment,
  reactToComment,
}  from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/:orgId/:boardId/:taskId", getComments);
router.post("/:orgId/:boardId/:taskId", createComment);
router.post("/:orgId/:boardId/:taskId/reply", replyToComment);
router.patch("/:orgId/:boardId/:taskId/react", reactToComment);

export default router;
