import React from "react";

export const AuthLayout = ({ children }: {children: React.ReactElement}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {children}
        </div>
    );
};
