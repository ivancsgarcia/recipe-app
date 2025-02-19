import mongoose from "mongoose";
import brcypt from "bcrypt";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipes" }],
});

// signup function
UserSchema.statics.signup = async function (username, email, password) {
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

    const exists = await this.findOne({ email });
    if (exists) {
        throw Error("User's email already exists!");
    }

    const salt = await brcypt.genSalt(10);
    const hashedPassword = await brcypt.hash(password, salt);

    const user = await this.create({
        username,
        email,
        password: hashedPassword,
    });
    return user;
};

// login function
UserSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error("Please fill in all fields!");
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error("Incorrect Email or Password!");
    }

    const match = await brcypt.compare(password, user.password);

    if (!match) {
        throw Error("Incorrect Email or Password!");
    }

    return user;
};

export const UserModel = mongoose.model("users", UserSchema);
