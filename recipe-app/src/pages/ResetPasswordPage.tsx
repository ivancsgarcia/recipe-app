import { useState } from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { FaLock } from "react-icons/fa6";



export const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <>
            <AuthLayout>
                            <div className="bg-white flex flex-col py-8 px-8 rounded-md">
                                <h1 className="mb-4 font-bold text-xl">Forgot Password</h1>
                                <div className="flex border rounded-sm mb-4">
                                    <div className="p-3 flex items-center">
                                        <FaLock />
                                    </div>
                                    <div className="h-auto w-[1px] bg-black"></div>
                                    <input
                                        type="text"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            setPassword(e.target.value);
                                        }}
                                        className=" px-2 py-3 focus:outline-none w-full"
                                        required
                                    />
                                </div>
                                <div className="flex border rounded-sm mb-4">
                                    <div className="p-3 flex items-center">
                                        <FaLock />
                                    </div>
                                    <div className="h-auto w-[1px] bg-black"></div>
                                    <input
                                        type="text"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            setConfirmPassword(e.target.value);
                                        }}
                                        className=" px-2 py-3 focus:outline-none w-full"
                                        required
                                    />
                                </div>
                                <button className="border p-4 hover:cursor-pointer hover:bg-gray-200">
                                    Reset Password
                                </button>
                            </div>
                        </AuthLayout>
        </>
    );
};
