import express  from "express";
import boardRouter  from "./board.route.js";
import authRouter  from "./auth.route.js";
import orgRouter  from "./org.route.js";
import memberRouter  from "./member.route.js";
import commentRouter  from "./comment.route.js";

const router = express.Router();

router.use("/boards", boardRouter);
router.use("/auth", authRouter);
router.use("/org", orgRouter);
router.use("/member", memberRouter);
router.use("/comment", commentRouter);

export default router;
