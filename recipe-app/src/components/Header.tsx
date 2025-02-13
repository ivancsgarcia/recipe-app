import { FaMagnifyingGlass, FaCaretDown } from "react-icons/fa6";
import { NavLink } from "react-router";

export const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between py-4 px-8 sticky top-0 z-1000 bg-white shadow-md">
                <div>
                    <h1>COMPANY NAME</h1>
                </div>
                <div className="flex border">
                    <input type="text" className="outline-none p-2 w-full" />
                    <div className="w-[1px] bg-black"></div>
                    <div className="px-3 m-auto hover:cursor-pointer">
                        <FaMagnifyingGlass />
                    </div>
                </div>
                <div className="flex gap-4">
                    <NavLink to="/" className="border py-2 px-4 hover:bg-gray-200 hover:cursor-pointer">
                        Home
                    </NavLink>
                    <NavLink to="/" className="border py-2 px-4 hover:bg-gray-200 hover:cursor-pointer">
                        Saved Recipes
                    </NavLink>
                    <NavLink to="/" className="border py-2 px-4 hover:bg-gray-200 hover:cursor-pointer">
                        Saved Recipes
                    </NavLink>
                </div>
                <div className="flex items-center gap-4 bg-red-400">
                    <div className="rounded-full">
                        <img src="" alt="avatar" />
                    </div>
                    <FaCaretDown />
                </div>
            </div>
        </>
    );
};
