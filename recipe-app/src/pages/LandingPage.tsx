import { NavLink } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Hero } from "../components/Hero";
import { Newsletter } from "../components/Newsletter";
import { RecipeCard } from "../components/RecipeCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../components/Footer";
import { CategoryCard } from "../components/CategoryCard";
import { LandingHeader } from "../components/LandingHeader";

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
    //                 "https://api.spoonacular.com/recipes/random?apiKey=1d58eeb2208646a3b83ffcf76ee1b4c2&number=5"
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
            <div className="container mx-auto bg-[#FCFCFC] text-[#4A4A4A]">
                <LandingHeader />

                {/* <Hero /> */}
                <div className="my-12">
                    <h2 className="text-center text-3xl font-bold mb-4">
                        Categories
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <CategoryCard imageUrl={'images/category-images/main-course-img.jpg'} name="Main Course" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Side dish" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Dessert" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Appetizer" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Salad" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Bread" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Breakfast" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Soup" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Beverage" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Sauce" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Marinade" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Fingerfood" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Snack" />
                        <CategoryCard imageUrl={'images/no-img.jpg'} name="Drink" />
                    </div>
                </div>
                <div>
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
                </div>
                <Newsletter />
                <Footer />
            </div>
        </>
    );
};
