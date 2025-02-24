import { Newsletter } from "../components/Newsletter";
import { RecipeCard } from "../components/RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { LandingHeader } from "../components/LandingHeader";
import { CategorySection } from "../components/CategorySection";

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
    const [loading, setLoading] = useState<boolean>(true);
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
    //                 "https://api.spoonacular.com/recipes/random?apiKey=1d58eeb2208646a3b83ffcf76ee1b4c2&number=5"
    //             );
    //             const data = response.data;
    //             console.log(data.recipes);
    //             setRandomRecipes(data.recipes);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     getAllRecipes();
    // }, []);
    return (
        <>
            <div className="container mx-auto bg-[#FCFCFC] text-[#4A4A4A]">
                <LandingHeader />

                {/* <Hero /> */}
                <div className="my-12">
                    <h2 className="text-center text-3xl font-bold mb-4">
                        Categories
                    </h2>
                    <CategorySection />
                </div>
                <div>
                    {!loading ? (
                        <>
                            <h2 className="text-center text-3xl font-bold mb-4">
                                Random Recipes
                            </h2>
                            <div className="flex flex-wrap gap-4 justify-around items-center">
                                {randomRecipes.map((recipe) => (
                                    <RecipeCard
                                        imageUrl={recipe.image}
                                        recipeName={recipe.title}
                                        recipeDescription={recipe.description}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-center text-3xl font-bold mb-4">
                                Loading...
                            </h2>
                        </>
                    )}
                </div>
                <Newsletter />
                <Footer />
            </div>
        </>
    );
};
