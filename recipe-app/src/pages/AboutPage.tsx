import { NavLink } from "react-router";
import { Header } from "../components/Header";

export const AboutPage = () => {
    return (
        <>
            <div className="container mx-auto relative">
                <Header />

                <div className="w-full h-[500px] bg-[url('images/hero-images/hero3-img.jpeg')] bg-cover bg-center px-6 py-8">
                    <div className="max-w-2xl flex flex-col mx-auto justify-center h-full text-center">
                        <h2 className="font-bold text-5xl mb-6">
                            Welcome to Spoonfed
                        </h2>
                        <p className="px-4 text-lg">
                            At Spoonfed, we believe that food is more than just
                            sustenance—it’s an experience, a story, and a way to
                            bring people together. Whether you're a passionate
                            home cook, an aspiring chef, or just someone who
                            loves discovering delicious meals, you belong here!
                            Our platform is designed to inspire, connect, and
                            empower food lovers around the world by providing a
                            space where everyone can share, learn, and enjoy
                            great recipes.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 py-8">
                    <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-center">
                        <h2 className="text-center font-bold text-3xl mb-4">
                            Our Story
                        </h2>

                        <div className="md:hidden my-4">
                            <img
                                src="images/no-img.jpg"
                                alt=""
                                className="mx-auto border"
                            />
                        </div>

                        <p className="px-4 text-justify">
                            Spoonfed was born from a simple idea: Food should be
                            accessible, inspiring, and shared. We started as a
                            small community of food enthusiasts who wanted to
                            create a space where home chefs and food lovers
                            could:
                        </p>
                        <ul className="space-y-1 my-4 pl-8">
                            <li className="list-disc">
                                Discover amazing recipes from fellow foodies
                            </li>
                            <li className="list-disc">
                                Share their own creations with a supportive
                                community
                            </li>
                            <li className="list-disc">
                                Learn new cooking techniques and kitchen hacks
                            </li>
                            <li className="list-disc">
                                Save & organize their favorite recipes for
                                future meals
                            </li>
                        </ul>
                        <p className="px-4 text-justify">
                            Over time, Spoonfed has evolved into a vibrant hub
                            where thousands of users explore and contribute to a
                            growing collection of tried-and-true recipes.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 hidden md:flex md:items-center px-4">
                        <img
                            src="images/no-img.jpg"
                            alt=""
                            className="mx-auto border"
                        />
                    </div>
                </div>

                <div className="py-8">
                    <h2 className="text-center font-bold text-3xl">
                        Our Mission
                    </h2>
                    <p className="text-center mb-4">We are on a mission to:</p>
                    <div className="grid grid-cols-12 gap-4 px-4">
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 shadow-lg">
                            <p>Make cooking fun and accessible for everyone</p>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 shadow-lg">
                            <p>
                                Encourage creativity in the kitchen with diverse
                                recipes
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 shadow-lg">
                            <p>
                                Celebrate global flavors by bringing cultural
                                cuisines to the table
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-3 border p-4 shadow-lg">
                            <p>
                                Support home chefs in their journey to mastering
                                delicious dishes
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <h2 className="text-center font-bold text-3xl mb-4">
                        What Makes Spoonfed Special?
                    </h2>
                    <div className="grid grid-cols-12 gap-4 px-4">
                        <div className="col-span-6 border p-4 shadow-lg">
                            <h3>Handpicked Recipes:</h3>
                            <p>
                                Browse a curated collection of homemade and
                                chef-approved dishes.
                            </p>
                        </div>
                        <div className="col-span-6 border p-4 shadow-lg">
                            <h3>Your Personal Cookbook:</h3>
                            <p>
                                Save and organize your favorite recipes in one
                                place.
                            </p>
                        </div>
                        <div className="col-span-6 border p-4 shadow-lg">
                            <h3>Create & Share:</h3>
                            <p>
                                Upload your own recipes and inspire a community
                                of food lovers.
                            </p>
                        </div>
                        <div className="col-span-6 border p-4 shadow-lg">
                            <h3>Smart Search & Filters: </h3>
                            <p>
                                Find exactly what you need—from quick dinners to
                                gourmet delights.
                            </p>
                        </div>
                        <div className="col-span-6 border p-4 shadow-lg">
                            <h3>Engage with Others: </h3>
                            <p>
                                Leave reviews, share cooking tips, and connect
                                with fellow foodies.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our Community!
                    </h2>
                    <p>
                        Spoonfed is more than just a recipe website—it’s a
                        movement. We invite you to be part of our growing
                        food-loving family by:
                    </p>
                    <ul className="space-y-1 my-8">
                        <li className="list-disc">
                            Signing up and creating your own digital cookbook
                        </li>
                        <li className="list-disc">
                            Exploring new recipes from all over the world
                        </li>
                        <li className="list-disc">
                            Sharing your best dishes with a supportive community
                        </li>
                        <li className="list-disc">
                            Learning new techniques and leveling up your cooking
                            skills
                        </li>
                    </ul>
                    <p className="italic">
                        Let’s cook, share, and inspire—together!
                    </p>
                </div>

                <div className="py-8 text-center">
                    <h2 className="font-bold text-3xl mb-4">
                        Stay Connected
                    </h2>
                    <p className="mb-4">
                        Follow us on
                        <span
                            className={"hover:cursor-pointer hover:underline"}
                        >
                            Instagram
                        </span>
                        ,
                        <span
                            className={"hover:cursor-pointer hover:underline"}
                        >
                            Facebook
                        </span>
                        , and
                        <span
                            className={"hover:cursor-pointer hover:underline"}
                        >
                            Twitter
                        </span>
                        for daily recipe inspiration.
                    </p>
                    <p className="mb-4">
                        Subscribe to our newsletter for exclusive content,
                        cooking tips, and special offers!
                    </p>
                    <div className="space-x-4">
                        <input type="text" className="border rounded-md hover:outline-none p-2"/>
                        <button className="border p-2 rounded-md hover:cursor-pointer hover:bg-gray-200">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    );
};
