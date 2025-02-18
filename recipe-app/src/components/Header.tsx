import { FaCaretDown } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router";
import NoImage from "../assets/images/no-img.jpg";
import { useState } from "react";
import { useCookies } from "react-cookie";

export const Header = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
    const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userId");
        navigate("/login");
    };
    return (
        <>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsNavMenuOpen(!isNavMenuOpen);
                                }}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg
                                    className={
                                        "size-6 " +
                                        (isNavMenuOpen ? "hidden" : "block")
                                    }
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
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>

                                <svg
                                    className={
                                        "size-6 " +
                                        (isNavMenuOpen ? "block" : "hidden")
                                    }
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
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>

                                {/* Icon when menu is open.

                                Menu open: "block", Menu closed: "hidden" */}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    alt="Your Company"
                                />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <NavLink
                                        to="/home"
                                        className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                                        aria-current="page"
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/my-recipes"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        My Recipes
                                    </NavLink>
                                    <NavLink
                                        to="#"
                                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Saved Recipes
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Profile dropdown */}
                            <div className="relative ml-3">
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsProfileMenuOpen(
                                                !isProfileMenuOpen
                                            );
                                        }}
                                        className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            className="size-8 rounded-full"
                                            src={NoImage}
                                            alt="avatar-image"
                                        />
                                    </button>
                                    <FaCaretDown
                                        type="button"
                                        onClick={() => {
                                            setIsProfileMenuOpen(
                                                !isProfileMenuOpen
                                            );
                                        }}
                                    />
                                </div>
                                {/* Dropdown menu, show/hide based on menu state.
                                Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95" To:
                                "transform opacity-100 scale-100" Leaving:
                                "transition ease-in duration-75" From:
                                "transform opacity-100 scale-100" To: "transform
                                opacity-0 scale-95" */}
                                {isProfileMenuOpen && (
                                    <div
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="user-menu-button"
                                        tabIndex={-1}
                                    >
                                        {/* <!-- Active: "bg-gray-100 outline-hidden", Not Active: "" --> */}
                                        <NavLink
                                            to="#"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex={-1}
                                            id="user-menu-item-0"
                                        >
                                            Your Profile
                                        </NavLink>
                                        {cookies.access_token && (
                                            <button
                                                onClick={() => {
                                                    setIsOpenModal(
                                                        !isOpenModal
                                                    );
                                                }}
                                                className="block px-4 py-2 text-sm text-gray-700"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="user-menu-item-2"
                                            >
                                                Sign out
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/*Mobile menu, show/hide based on menu state.*/}
                {isNavMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                            <NavLink
                                to={"/home"}
                                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                                aria-current="page"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to={"/my-recipes"}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                My Recipes
                            </NavLink>
                            <NavLink
                                to={"*"}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                saved Recipes
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>

            {/* Dialog */}
            {isOpenModal && (
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
                                            setIsOpenModal(!isOpenModal);
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
