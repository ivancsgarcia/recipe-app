import React, { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { FaEnvelope } from "react-icons/fa6";

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    return (
        <>
            <AuthLayout>
                <div className="bg-white flex flex-col py-8 px-8 rounded-md">
                    <h1 className="mb-4 font-bold text-xl">Forgot Password</h1>
                    <div className="flex border rounded-sm mb-4">
                        <div className="p-3 flex items-center">
                            <FaEnvelope />
                        </div>
                        <div className="h-auto w-[1px] bg-black"></div>
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setEmail(e.target.value);
                            }}
                            className=" px-2 py-3 focus:outline-none w-full"
                            required
                        />
                    </div>
                    <button className="border p-4 hover:cursor-pointer hover:bg-gray-200">
                        Forgot Password
                    </button>
                </div>
            </AuthLayout>
        </>
    );
};
