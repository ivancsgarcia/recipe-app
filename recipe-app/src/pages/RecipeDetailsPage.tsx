import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useParams } from "react-router";
import { Header } from "../components/Header";

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

export const RecipeDetailsPage = () => {
    const params = useParams();
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {
        const getRecipeById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/recipes/${params.id}`,
                    { headers: { authorization: cookies.access_token } }
                );
                const data = response.data;
                setRecipe(data);
            } catch (error) {
                console.error(error);
            }
        };

        getRecipeById();
    }, []);

    return (
        <>
            <Header />
            <div className="container mx-auto p-4 min-h-screen border-x grid grid-cols-12 gap-8">
                <div className="grid col-span-12 md:col-span-8">
                    {recipe && (
                        <>
                            <div className="">
                                <img
                                    src={recipe.imageUrl}
                                    alt="recipe-image"
                                    className="object-center size-full mx-auto rounded-md"
                                />
                            </div>
                            <div className="mb-8">
                                <div className="flex md:flex-row flex-col md:justify-between">
                                    <div className="w-full md:w-[70%]">
                                        <h1 className="text-5xl font-bold mt-4 mb-2">
                                            {recipe.name}
                                        </h1>
                                    </div>
                                    <div className="my-4 w-full md:w-[30%] md:text-right">
                                        <p className="font-bold">
                                            Total time to serve:
                                        </p>
                                        <p>{recipe.cookingTime} minutes</p>
                                    </div>
                                </div>

                                <p className="hyphens-auto">
                                    {recipe.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h2 className="font-bold mb-4">Ingredients:</h2>
                                <ul>
                                    {recipe.ingredients.map(
                                        (ingredient, index) => (
                                            <li key={index} className="mb-4">
                                                {ingredient}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="font-bold mb-4">
                                    Instructions:
                                </h2>
                                <ul>
                                    {recipe.instructions.map(
                                        (instruction, index) => (
                                            <div className="mb-4">
                                                <li className="font-bold mb-1">
                                                    Step {index + 1}
                                                </li>
                                                <p key={index}>{instruction}</p>
                                            </div>
                                        )
                                    )}
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <div className="grid col-span-12 md:col-span-4 bg-blue-200">
                    side
                </div>
            </div>
        </>
    );
};
