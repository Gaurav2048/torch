const express = require("express");
const {
  getComments,
  createComment,
  replyToComment,
  reactToComment,
} = require("../controllers/comment.controller");

const router = express.Router();

router.get("/:orgId/:boardId/:taskId", getComments);
router.post("/:orgId/:boardId/:taskId", createComment);
router.post("/:orgId/:boardId/:taskId/reply", replyToComment);
router.patch("/:orgId/:boardId/:taskId/react", reactToComment);

module.exports = router;
