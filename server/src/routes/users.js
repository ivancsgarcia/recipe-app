import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
        return res.json({ msg: "User's email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
    });
    await newUser.save();

    res.json({ msg: "User registered successfully!" });
});

router.post("/login", async (req, res) => {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.json({ msg: "User doesn't exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.json({ msg: "Incorrect Email or Password!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token, userId: user._id });
});

export { router as userRouter };
