import { FaCaretDown, FaBars } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { ProfileModal } from "./ProfileModal";

export const Header = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
    const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userId");
        navigate("/login");
    };
    return (
        <>
            <header className=" py-5 px-3 bg-white flex justify-between items-center">
                <div className="relative md:hidden block">
                    <FaBars
                        type="button"
                        onClick={() => {
                            setIsNavMenuOpen(!isNavMenuOpen);
                        }}
                    />
                    {isNavMenuOpen && (
                        <div
                            onClick={() => {
                                isNavMenuOpen && setIsNavMenuOpen(false);
                                isProfileMenuOpen &&
                                    setIsProfileMenuOpen(false);
                            }}
                            className="fixed h-full w-full top-0 left-0 bg-transparent z-10"
                        >
                            <div className="absolute left-0 mt-20 bg-white border rounded w-40 z-10">
                                <NavLink
                                    to={"/home"}
                                    className={
                                        "block hover:bg-gray-200 py-2 px-4"
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to={"/about"}
                                    className={
                                        "block hover:bg-gray-200 py-2 px-4"
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to={"/my-recipes"}
                                    className={
                                        "block hover:bg-gray-200 py-2 px-4"
                                    }
                                >
                                    My Recipe
                                </NavLink>
                                <NavLink
                                    to={"/saved-recipes"}
                                    className={
                                        "block hover:bg-gray-200 py-2 px-4"
                                    }
                                >
                                    Saved Recipe
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-x-4">
                    <img
                        src={"images/no-img.jpg"}
                        alt="logo"
                        className="size-12 inline"
                    />
                    <h1 className="inline">Spoonfed</h1>
                </div>

                <div className="md:space-x-4 md:block hidden">
                    <NavLink
                        to={"/home"}
                        className={"hover:bg-gray-200 px-4 py-2"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to={"/about"}
                        className={"hover:bg-gray-200 px-4 py-2"}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to={"/my-recipes"}
                        className={"hover:bg-gray-200 px-4 py-2"}
                    >
                        My Recipe
                    </NavLink>
                    <NavLink
                        to={"/saved-recipes"}
                        className={"hover:bg-gray-200 px-4 py-2"}
                    >
                        Saved Recipe
                    </NavLink>
                </div>

                <div className="relative">
                    <div
                        onClick={() => {
                            setIsProfileMenuOpen(!isProfileMenuOpen);
                        }}
                        className="space-x-1 flex items-center"
                    >
                        <img
                            src={"images/no-img.jpg"}
                            alt=""
                            className="size-12 border rounded-full inline"
                        />
                        <FaCaretDown role="button" className="inline" />
                    </div>
                    {isProfileMenuOpen && (
                        <div
                            onClick={() => {
                                isNavMenuOpen && setIsNavMenuOpen(false);
                                isProfileMenuOpen &&
                                    setIsProfileMenuOpen(false);
                            }}
                            className="fixed h-full w-full top-0 right-0 bg-transparent z-10"
                        >
                            <div className="absolute right-0 mt-20 bg-white border rounded w-40 z-10">
                                <button
                                    onClick={() => {
                                        setIsProfileModalOpen(
                                            !isProfileModalOpen
                                        );
                                    }}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                >
                                    Profile
                                </button>
                                {cookies.access_token && (
                                    <button
                                        onClick={() => {
                                            setIsLogoutModalOpen(
                                                !isLogoutModalOpen
                                            );
                                        }}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Profile Modal */}
            {isProfileModalOpen && <ProfileModal isProfileModalOpen={isProfileModalOpen} setIsProfileModalOpen={setIsProfileModalOpen} />}

            {/* Logout Modal */}
            {isLogoutModalOpen && (
                <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="fixed inset-0 bg-gray-500/75 transition-opacity"
                        aria-hidden="true"
                    ></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                            <svg
                                                className="size-6 text-red-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3
                                                className="text-base font-semibold text-gray-900"
                                                id="modal-title"
                                            >
                                                Logout
                                            </h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Are you sure you want to log
                                                    out? You will need to log in
                                                    again to access your
                                                    account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        onClick={handleLogout}
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Logout
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsLogoutModalOpen(
                                                !isLogoutModalOpen
                                            );
                                        }}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
