import { NavLink } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";
import { RecipeCard } from "../components/RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import NoImage from "../assets/images/no-img.jpg";
import { CategoryCard } from "../components/CategoryCard";

interface Recipe {
    id: number;
    title: string;
    image: string;
    description: string;
    type: [string];
    servings: number;
    readyInMinutes: number;
    ingredients: [{}];
    instructions: [{}];
}

export const LandingPage = () => {
    const [randomRecipes, setRandomRecipes] = useState<Recipe[]>([
        {
            id: 0,
            title: "",
            image: "",
            description: "",
            type: [""],
            servings: 0,
            readyInMinutes: 0,
            ingredients: [{}],
            instructions: [{}],
        },
    ]);

    // useEffect(() => {
    //     const getAllRecipes = async () => {
    //         try {
    //             const response = await axios.get(
    //                 "https://api.spoonacular.com/recipes/random?apiKey=1d58eeb2208646a3b83ffcf76ee1b4c2&number=10"
    //             );
    //             const data = response.data;
    //             console.log(data.recipes);
    //             setRandomRecipes(data.recipes);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     getAllRecipes();
    // }, []);
    return (
        <>
            <div className="flex items-center justify-between py-4 px-8 sticky top-0 z-1000 bg-[#2E2E2E] text-[#D4AF37]">
                <div className="flex items-center gap-1">
                    <img src="#" alt="spoonfed-logo" />
                    <h1 className="text-3xl">Spoonfed</h1>
                </div>
                <div className="flex border rounded-sm w-1/4">
                    <input type="text" className="outline-none p-2 w-full" />
                    <div className="w-[1px] bg-[#D4AF37]"></div>
                    <div className="px-3 m-auto">
                        <FaMagnifyingGlass />
                    </div>
                </div>
                <div className="flex gap-4">
                    <NavLink
                        to="/login"
                        className="border rounded-sm py-2 px-4 hover:bg-[#D4AF37] hover:text-[#2E2E2E]"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="border rounded-sm py-2 px-4 hover:bg-[#D4AF37] hover:text-[#2E2E2E]"
                    >
                        Sign Up
                    </NavLink>
                </div>
            </div>

            <div className="container mx-auto bg-[#1C1C1C] text-[#F5F5F5]">
                <Hero />
                <div className="my-12">
                    <h2 className="text-center text-3xl font-bold mb-4">
                        Categories
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <CategoryCard imageUrl={NoImage} name="Breakfast" />
                        <CategoryCard imageUrl={NoImage} name="Lunch" />
                        <CategoryCard imageUrl={NoImage} name="Dinner" />
                        <CategoryCard imageUrl={NoImage} name="Desserts" />
                        <CategoryCard imageUrl={NoImage} name="Snacks" />
                        <CategoryCard
                            imageUrl={NoImage}
                            name="Drinks & Beverages"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-center text-3xl font-bold mb-4">
                        Featured Recipes
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-around items-center">
                        {randomRecipes.map((recipe) => (
                            <RecipeCard
                                imageUrl={recipe.image}
                                RecipeName={recipe.title}
                            />
                        ))}
                    </div>
                </div>
                <Newsletter />
                <Footer />
            </div>
        </>
    );
};
