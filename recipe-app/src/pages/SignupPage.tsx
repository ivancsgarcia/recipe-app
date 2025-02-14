import axios from "axios";
import React, { useState } from "react";
import { FaGoogle, FaUser, FaEnvelope, FaLock } from "react-icons/fa6";
import { NavLink } from "react-router";
import { AuthLayout } from "../layouts/AuthLayout";

export const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (password !== confirmPassword) {
                setMessage("Passwords do not match");
                return;
            }

            await axios.post("http://localhost:3001/auth/register", {
                username,
                email,
                password,
            });
            alert("User registered successfully");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthLayout>
            <div className="bg-white w-6/12 flex rounded-sm border-gray-200 border shadow-lg">
                <div className="pt-8 px-8 pb-4 w-1/2">
                    <div className="flex justify-center gap-4 mb-16">
                        <NavLink
                            to=""
                            className=" text-center bg-black text-white rounded-md w-full py-2 hover:bg-gray-800 hover:cursor-pointer"
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="text-center border rounded-md w-full py-2 hover:cursor-pointer hover:bg-gray-100"
                        >
                            Log In
                        </NavLink>
                    </div>
                    <button className="flex justify-center items-center gap-[2px] border w-full rounded-sm py-4 hover:cursor-pointer hover:bg-gray-100">
                        <FaGoogle />
                        Google
                    </button>
                    <div className="flex items-center justify-center w-full gap-4 my-8">
                        <div className="h-[1px] w-full bg-black"></div>
                        <p>OR</p>
                        <div className="h-[1px] w-full bg-black"></div>
                    </div>
                    <form
                        method="post"
                        onSubmit={onSubmit}
                        className="flex flex-col"
                    >
                        <div className="flex border rounded-sm mb-4">
                            <div className="p-4 flex items-center">
                                <FaUser />
                            </div>
                            <div className="h-auto w-[1px] bg-black"></div>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className=" px-2 py-4 focus:outline-none w-full"
                                required
                            />
                        </div>
                        <div className="flex border rounded-sm mb-4">
                            <div className="p-4 flex items-center">
                                <FaEnvelope />
                            </div>
                            <div className="h-auto w-[1px] bg-black"></div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className=" px-2 py-4 focus:outline-none w-full"
                                required
                            />
                        </div>
                        <div className="flex border rounded-sm mb-4">
                            <div className="p-4 flex items-center">
                                <FaLock />
                            </div>
                            <div className="h-auto w-[1px] bg-black"></div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className=" px-2 py-4 focus:outline-none w-full"
                                required
                            />
                        </div>
                        <div className="flex border rounded-sm mb-1">
                            <div className="p-4 flex items-center">
                                <FaLock />
                            </div>
                            <div className="h-auto w-[1px] bg-black"></div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                className="px-2 py-4 focus:outline-none w-full"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-1 mb-8">
                            <input
                                type="checkbox"
                                className="hover:cursor-pointer"
                            />
                            <p>Remember Me</p>
                        </div>
                        <input
                            type="submit"
                            value="Sign Up"
                            className="bg-black text-white border rounded-sm py-4 hover:cursor-pointer hover:bg-gray-800"
                        />
                    </form>
                    <p>{message}</p>
                </div>
                <div className="w-1/2"></div>
            </div>
        </AuthLayout>
    );
};
