import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { NavLink } from "react-router";

export const LandingHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-white">
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <a
                            href="#"
                            className="-m-1.5 p-1.5 flex items-center gap-2"
                        >
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                            <p>Spoonfed</p>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="size-6"
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
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <div className="flex border border-[#F7E7CE] rounded-sm bg-white">
                            <input
                                type="text"
                                className="outline-none p-2 w-full text-[#4A4A4A]"
                                placeholder="Search recipes..."
                            />
                            <div className="w-[1px] bg-[#D4B99F]"></div>
                            <div className="px-3 m-auto text-[#E6B800]">
                                <FaMagnifyingGlass />
                            </div>
                        </div>
                    </div>
                    <div className="hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
                        <NavLink
                            to={"/login"}
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </NavLink>
                        <NavLink
                            to={"/signup"}
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Sign up
                        </NavLink>
                    </div>
                </nav>
                {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
                {isMenuOpen && (
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                        <div className="fixed inset-0 z-10"></div>

                        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="size-6"
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
                                </button>
                            </div>

                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <div className="-mx-3">
                                            {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                                            <div
                                                className="mt-2 space-y-2"
                                                id="disclosure-1"
                                            >
                                                <a
                                                    href="#"
                                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    Login
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                >
                                                    Sign Up
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};
