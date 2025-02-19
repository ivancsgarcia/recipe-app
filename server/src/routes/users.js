import express from "express";
import dotenv from "dotenv";
import { userLogin, userSignup } from "../controllers/userController.js";

dotenv.config();

const router = express.Router();

router.post("/register", userSignup);

router.post("/login", userLogin);

export { router as userRouter };
