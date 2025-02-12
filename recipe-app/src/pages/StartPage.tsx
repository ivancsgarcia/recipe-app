import { NavLink } from "react-router";

export const StartPage = () => {
    return (
        <div className="">
            <div className="p-4 flex gap-4">
                <NavLink to="/login" className="border py-2 px-4">
                    Login
                </NavLink>
                <NavLink to="/signup" className="border py-2 px-4">
                    Sign Up
                </NavLink>
            </div>
        </div>
    );
};
