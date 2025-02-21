import { NavLink } from "react-router";
// import NoImage from "../assets/images/no-img.jpg";

export const LandingHeader = () => {
    return (
        <>
            <header className="overflow-hidden py-5 px-3 bg-white">
                <div className="md:float-left float-none text-center space-x-4">
                    <img src={'images/no-img.jpg'} alt="logo" className="size-12 inline" />
                    <h1 className="inline">Spoonfed</h1>
                </div>
                <div className="md:float-right float-none space-x-4">
                    <NavLink
                        to={"/login"}
                        className={
                            "md:border md:rounded-md px-4 py-2 block w-full md:w-auto md:inline-block hover:cursor-pointer hover:bg-gray-200"
                        }
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to={"/signup"}
                        className={
                            "md:border md:rounded-md px-4 py-2 block w-full md:w-auto md:inline-block hover:cursor-pointer hover:bg-gray-200"
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>
            </header>
        </>
    );
};
