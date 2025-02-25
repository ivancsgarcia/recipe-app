import { useEffect, useState } from "react";
import { CategorySection } from "../components/CategorySection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HeroTwo } from "../components/HeroTwo";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import { RecipeCard } from "../components/RecipeCard";

export const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    // useEffect(() => {
    //     const getAllRecipes = async () => {
    //         try {
    //             const response = await axios.get(
    //                 "https://api.spoonacular.com/recipes/random?apiKey=1d58eeb2208646a3b83ffcf76ee1b4c2&number=5"
    //             );
    //             const data = response.data;
    //             console.log(data.recipes);
    //             setRecipes(data.recipes);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     getAllRecipes();
    // }, []);
    return (
        <>
            <div className="container mx-auto relative">
                <Header />

                <HeroTwo />

                <h2 className="text-center text-3xl mt-8 mb-4">
                    Featured Recipes
                </h2>
                <div className="flex w-full h-[800px]">
                    <div className="w-[70%] h-full bg-[url('images/no-img.jpg')] bg-no-repeat bg-center border"></div>
                    <div className="w-[30%] flex flex-col">
                        <div className="w-auto h-1/3 bg-[url('images/no-img.jpg')] bg-no-repeat bg-center border"></div>
                        <div className="w-auto h-1/3 bg-[url('images/no-img.jpg')] bg-no-repeat bg-center border"></div>
                        <div className="w-auto h-1/3 bg-[url('images/no-img.jpg')] bg-no-repeat bg-center border"></div>
                    </div>
                </div>

                <h2 className="text-center text-3xl mt-8 mb-4">Categories</h2>
                <CategorySection />

                <div className="w-1/2 mx-auto border rounded-md flex mt-8 mb-4">
                    <input
                        type="text"
                        className="w-full px-4 py-2 focus:outline-none"
                    />
                    <div className="w-[1px] bg-black"></div>
                    <div className="flex items-center justify-center px-4 py-2 hover:bg-gray-200 rounded-md hover:cursor-pointer">
                        <FaMagnifyingGlass />
                    </div>
                </div>

                <h2 className="text-center text-3xl mt-8 mb-4">All Recipes</h2>
                <div className="flex flex-wrap gap-4 justify-around items-center">
                    {/* {recipes.map((recipe) => (
                        <RecipeCard
                            imageUrl={recipe.image}
                            recipeName={recipe.title}
                            recipeDescription={recipe.description}
                        />
                    ))} */}
                </div>
                <Footer />
            </div>
        </>
    );
};
