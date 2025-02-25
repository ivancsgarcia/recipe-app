import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { RecipeCard } from "../components/RecipeCard";
import axios from "axios";
import { NavLink } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useCookies } from "react-cookie";
import { Footer } from "../components/Footer";

interface Recipe {
    _id: string;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    cookingTime: number;
    userOwner: string | null;
}

export const MyRecipesPage = () => {
    const [cookies] = useCookies(["access_token"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [recipes, setRecipes] = useState<Recipe[]>([
        {
            _id: "",
            name: "",
            description: "",
            ingredients: [],
            instructions: [],
            imageUrl: "",
            cookingTime: 0,
            userOwner: "",
        },
    ]);

    useEffect(() => {
        const getCreatedRecipes = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/recipes",
                    { headers: { authorization: cookies.access_token } }
                );
                const data = response.data;
                console.log(data);
                setRecipes(data);
            } catch (error) {
                console.error(error);
            }
        };

        getCreatedRecipes();
    }, []);
    return (
        <>
            <div className="container mx-auto">
                {/* Header */}
                <Header />

                {/* Content */}
                <div className="container mx-auto min-h-screen">
                    <div className="flex flex-col items-center gap-4 mb-4 md:flex-row md:justify-between">
                        <h1 className="text-xl md:text-2xl lg:text-3xl">
                            My Recipe
                        </h1>
                        <NavLink to={'/create-recipe'}
              
                            className="border rounded-md px-8 py-4"
                        >
                            Create New Recipe
                        </NavLink>
                    </div>

                    {/* Search Bar */}
                    <div className="my-8">
                        <div className="flex w-full md:w-[50%] mx-auto border rounded-md">
                            <input
                                type="text"
                                className="w-full focus:outline-none px-4"
                            />
                            <div className="w-[1px] bg-black"></div>
                            <div className="flex justify-center items-center p-3">
                                <FaMagnifyingGlass />
                            </div>
                        </div>
                    </div>

                    {/* Recipe Cards */}
                    {!loading ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
                            {recipes.map((recipe) => (
                                <NavLink to={`/recipes/${recipe._id}`}>
                                    <RecipeCard
                                        recipeName={recipe.name}
                                        imageUrl={recipe.imageUrl}
                                        recipeDescription={recipe.description}
                                    />
                                </NavLink>
                            ))}
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    console.log(recipes);
                                }}
                            >
                                click me
                            </button>
                        </>
                    )}
                    <Footer />
                </div>
            </div>
        </>
    );
};
