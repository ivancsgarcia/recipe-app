import { NavLink } from "react-router";

export const HeroTwo = () => {
    return (
        <>
            <div className="bg-[url(images/hero-images/hero2-img.jpg)] bg-center bg-cover h-[400px] flex flex-col justify-center items-center mt-4">
                <div className="bg-opacity-50 p-4 rounded">
                    <h1 className="text-center text-white text-4xl md:text-5xl lg:text-6xl">
                        Ready to Create Culinary Magic, Chef?
                    </h1>
                </div>
                <div className="text-center mt-4 bg-opacity-50 p-4 rounded">
                    <p className="text-white text-lg md:text-xl lg:text-2xl">
                        Welcome back to Spoonfed! Dive into your personal
                        dashboard, update your favorite recipes, and explore new
                        dishes crafted just for you. Your next masterpiece
                        awaits!
                    </p>
                    <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
                        <NavLink
                            to={"/my-recipes"}
                            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 hover:cursor-pointer"
                        >
                            My Recipes
                        </NavLink>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:cursor-pointer">
                            Discover Recipes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
