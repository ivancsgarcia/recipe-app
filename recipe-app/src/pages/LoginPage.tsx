import React, { useState } from "react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import { useCookies } from "react-cookie";
import { AuthLayout } from "../layouts/AuthLayout";
import { Slide, toast } from "react-toastify";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/auth/login",
                {
                    email,
                    password,
                }
            );

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userId", response.data.userId);
            toast("User logged in successfully", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
            setTimeout(() => {
                navigate("/home");
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <AuthLayout>
                <div className="bg-white w-6/12 flex rounded-sm border-gray-200 border shadow-lg">
                    <div className="pt-8 px-8 pb-4 w-1/2">
                        <div className="flex justify-center gap-4 mb-16">
                            <NavLink
                                to="/signup"
                                className=" text-center border rounded-md w-full py-2 hover:bg-gray-100 hover:cursor-pointer"
                            >
                                Sign Up
                            </NavLink>
                            <NavLink
                                to=""
                                className="text-center bg-black text-white rounded-md w-full py-2 hover:bg-gray-800 hover:cursor-pointer"
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
                            <div className="flex border rounded-sm mb-1">
                                <div className="p-4 flex items-center">
                                    <FaLock />
                                </div>
                                <div className="h-auto w-[1px] bg-black"></div>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="px-2 py-4 focus:outline-none w-full"
                                    required
                                />
                            </div>
                            <div className="flex justify-between mb-8">
                                <div className="flex items-center gap-1">
                                    <input
                                        type="checkbox"
                                        className="hover:cursor-pointer"
                                    />
                                    <p>Remember Me</p>
                                </div>
                                <div
                                    onClick={() => {
                                        navigate("/forgot-password");
                                    }}
                                    className="hover:underline hover:cursor-pointer"
                                >
                                    Forgot Password?
                                </div>
                            </div>
                            <input
                                type="submit"
                                value="Login"
                                className="bg-black text-white border rounded-sm py-4 hover:cursor-pointer hover:bg-gray-800"
                            />
                        </form>
                        <p>{message}</p>
                    </div>
                    <div className="w-1/2">image</div>
                </div>
            </AuthLayout>
        </>
    );
};
