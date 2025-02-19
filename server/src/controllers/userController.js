import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// login user
const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);

        res.json({ userId: user._id, token });
    } catch (error) {
        res.json({ msg: error.message });
    }

    // const user = await UserModel.findOne({ email });
    // if (!user) {
    //     return res.json({ msg: "User doesn't exist!" });
    // }

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //     return res.json({ msg: "Incorrect Email or Password!" });
    // }

    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // res.json({ token: token, userId: user._id });
};

// signup user
const userSignup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await UserModel.signup(username, email, password);

        const token = createToken(user._id);

        res.json({ userId: user_id, token });
    } catch (error) {
        res.json({ msg: error.message });
    }

    // const user = await UserModel.findOne({ email });

    // if (user) {
    //     return res.json({ msg: "User's email already exists!" });
    // }

    // const hashedPassword = await bcrypt.hash(password, 10);

    // const newUser = new UserModel({
    //     username,
    //     email,
    //     password: hashedPassword,
    // });
    // await newUser.save();

    // res.json({ msg: "User registered successfully!" });
};

// export
export { userLogin, userSignup };
