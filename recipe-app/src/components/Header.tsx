import { FaMagnifyingGlass, FaCaretDown } from "react-icons/fa6";
import { NavLink } from "react-router";
import NoImage from "../assets/images/no-img.jpg";

export const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between py-4 px-8 sticky top-0 z-1000 bg-[#2E2E2E] text-[#D4AF37] shadow-md">
                <div className="flex items-center gap-1">
                    <img
                        src={NoImage}
                        alt="user-img"
                        className="object-cover bg-center border rounded-full w-12 h-12 hover:cursor-pointer"
                    />
                    <h1 className="text-3xl">Spoonfed</h1>
                </div>
                <div className="flex border">
                    <input type="text" className="outline-none p-2 w-full" />
                    <div className="w-[1px] bg-[#D4AF37]"></div>
                    <div className="px-3 m-auto hover:cursor-pointer">
                        <FaMagnifyingGlass />
                    </div>
                </div>
                <div className="flex gap-4">
                    <NavLink
                        to="/home"
                        className="border py-2 px-4 hover:bg-gray-200 hover:cursor-pointer"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/"
                        className="border py-2 px-4 hover:bg-gray-200 hover:cursor-pointer"
                    >
                        My Recipes
                    </NavLink>
                    <NavLink
                        to="/"
                        className="border py-2 px-4 hover:bg-gray-200 hover:cursor-pointer"
                    >
                        Saved Recipes
                    </NavLink>
                </div>
                <div className="flex items-center gap-2">
                    <img
                        src={NoImage}
                        alt="user-img"
                        className="object-cover bg-center border rounded-full w-12 h-12 hover:cursor-pointer"
                    />
                    <FaCaretDown className="hover:cursor-pointer" />
                </div>
            </div>
        </>
    );
};
