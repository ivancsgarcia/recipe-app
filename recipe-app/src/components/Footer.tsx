import {
    FaFacebook,
    FaInstagram,
    FaXTwitter,
    FaYoutube,
} from "react-icons/fa6";
import { NavLink } from "react-router";

export const Footer = () => {
    return (
        <>
            <div className="bg-gray-200 p-4">
                <div className="flex flex-wrap justify-center gap-4">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/my-recipes">My Recipes</NavLink>
                    <NavLink to="/saved-recipes">Saved Recipes</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4 my-4">
                    <div>
                        <FaFacebook />
                    </div>
                    <div>
                        <FaInstagram />
                    </div>
                    <div>
                        <FaXTwitter />
                    </div>
                    <div>
                        <FaYoutube />
                    </div>
                </div>
                <div>
                    <p className="text-center">
                        {new Date().getFullYear()} Spoonfed, All rights
                        reserved.
                    </p>
                </div>
            </div>
        </>
    );
};
