import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { UserModel } from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// login user
const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw Error("Please fill in all fields!");
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({ msg: "User doesn't exist!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ msg: "Incorrect Email or Password!" });
        }
        const token = createToken(user._id);
        res.json({ token, userId: user._id });
    } catch (error) {
        res.json({ msg: error.message });
    }
};

// signup user
const userSignup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            throw Error("Please fill in all fields!");
        }
        if (!validator.isEmail(email)) {
            throw Error("Please enter a valid email!");
        }
        if (!validator.isStrongPassword(password)) {
            throw Error(
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character!"
            );
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.json({ msg: "User's email already exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        res.json({ msg: "User registered successfully!" });

        // const token = createToken(user._id);
        // res.json({ userId: user_id, token });
    } catch (error) {
        res.json({ msg: error.message });
    }
};

// export
export { userLogin, userSignup };
