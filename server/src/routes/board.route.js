import express  from "express";
import {
  getBoards,
  createBoard,
  createTask,
  createBoardMember,
  removeBoardMember,
}  from "../controllers/board.controller.js";

const router = express.Router();

router.get("/:orgId/board/:id", getBoards);
// admin only
router.post("/:orgId", createBoard);
// admin only
router.post("/task/:orgId/:boardId", createTask);
// admin only
router.post("/:orgId/member", createBoardMember);
// admin only
router.put("/:orgId/member", removeBoardMember);

export default router;
