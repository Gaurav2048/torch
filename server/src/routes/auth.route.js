import express  from "express";
import { register, login, profile }  from "../controllers/auth.controller.js";
import auth  from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/profile", auth, profile)

export default router;
