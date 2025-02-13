import { NavLink } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const StartPage = () => {
    return (
        <>
            <div className="flex items-center justify-around p-4 bg-gray-400">
                <div>
                    <h1>COMPANY NAME</h1>
                </div>
                <div className="flex border">
                    <input type="text" className="outline-none p-2 w-full" />
                    <div className="w-[1px] bg-black"></div>
                    <div className="px-3 m-auto">
                        <FaMagnifyingGlass />
                    </div>
                </div>
                <div className="flex gap-4">
                    <NavLink to="/login" className="border py-2 px-4">
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="border py-2 px-4">
                        Sign Up
                    </NavLink>
                </div>
            </div>
            <div className="w-9/12 mx-auto p-4 bg-gray-200">
                <div>
                    <h2>Categories</h2>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <p className="border p-3">Breakfast</p>
                        <p className="border p-3">Lunch</p>
                        <p className="border p-3">Dinner</p>
                        <p className="border p-3">Desserts</p>
                        <p className="border p-3">Snacks</p>
                        <p className="border p-3">Drinks & Beverages</p>
                    </div>
                </div>
                <div>
                    <h2>Featured Recipes</h2>
                </div>
            </div>
        </>
    );
};
