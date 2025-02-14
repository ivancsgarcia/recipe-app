import {
    FaFacebook,
    FaInstagram,
    FaXTwitter,
    FaGithub,
    FaDribbble,
} from "react-icons/fa6";

export const Footer = () => {
    return (
        <>
            <section className="bg-[#1C1C1C]">
                <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                    <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                        <div className="px-5 py-2">
                            <a href="#" className=" leading-6  ">
                                Home
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className=" leading-6  ">
                                About
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className=" leading-6  ">
                                All Recipes
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className=" leading-6  ">
                                My Recipes
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className=" leading-6  ">
                                Saved Recipes
                            </a>
                        </div>
                        <div className="px-5 py-2">
                            <a href="#" className=" leading-6  ">
                                Profile
                            </a>
                        </div>
                    </nav>
                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="#" className="">
                            <span className="sr-only">Facebook</span>
                            <FaFacebook />
                        </a>
                        <a href="#" className="">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram />
                        </a>
                        <a href="#" className="">
                            <span className="sr-only">Twitter</span>
                            <FaXTwitter />
                        </a>
                        <a href="#" className="">
                            <span className="sr-only">GitHub</span>
                            <FaGithub />
                        </a>
                        <a href="#" className="">
                            <span className="sr-only">Dribbble</span>
                            <FaDribbble />
                        </a>
                    </div>
                    <p className="mt-8  leading-6 text-center ">
                        © {new Date().getFullYear()} Spoonfed, Inc. All rights
                        reserved.
                    </p>
                </div>
            </section>
        </>
    );
};
