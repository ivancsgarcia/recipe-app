import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { RecipeCard } from "../components/RecipeCard";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";
import { NavLink } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
    const [isOpenModal, setIsOpenModal] = useState(false);
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
                    "http://localhost:3001/recipes"
                );
                const data = response.data;
                setRecipes(data);
            } catch (error) {
                console.error(error);
            }
        };

        getCreatedRecipes();
    }, [recipes]);
    return (
        <>
            {/* Header */}
            <Header />

            <div className="relative">
                {/* Modal */}
                {isOpenModal && (
                    <CreateRecipeModal
                        isOpenModal={isOpenModal}
                        setIsOpenModal={setIsOpenModal}
                    />
                )}

                {/* Content */}
                <div className="container mx-auto min-h-screen p-4 border-x border-b">
                    <div className="flex flex-col items-center gap-4 mb-4 md:flex-row md:justify-between">
                        <h1 className="text-xl md:text-2xl lg:text-3xl">
                            My Recipe
                        </h1>
                        <button
                            onClick={() => {
                                setIsOpenModal(!isOpenModal);
                            }}
                            className="border rounded-md px-8 py-4"
                        >
                            Create New Recipe
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="my-8">
                        <div className="flex w-full md:w-[50%] mx-auto border rounded-md">
                            <input type="text" className="w-full focus:outline-none px-4" />
                            <div className="w-[1px] bg-black"></div>
                            <div className="flex justify-center items-center p-3">
                                <FaMagnifyingGlass />
                            </div>
                        </div>
                    </div>

                    {/* Recipe Cards */}
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
                </div>
            </div>
        </>
    );
};

interface CreateRecipeModalProps {
    isOpenModal: boolean;
    setIsOpenModal: (isOpenModal: boolean) => void;
}

interface CreateRecipeModal {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    cookingTime: number;
    userOwner: string | null;
}

const CreateRecipeModal = ({
    isOpenModal,
    setIsOpenModal,
}: CreateRecipeModalProps) => {
    const userId = useGetUserId();
    const [recipe, setRecipe] = useState<CreateRecipeModal>({
        name: "",
        description: "",
        ingredients: [],
        instructions: [],
        imageUrl: "",
        cookingTime: 0,
        userOwner: userId,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
    };

    const handleIngredientChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { value } = e.target;
        const newIngredients = recipe.ingredients;
        newIngredients[index] = value;
        setRecipe({ ...recipe, ingredients: newIngredients });
    };

    const addInstruction = () => {
        setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
    };

    const handleInstructionChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        index: number
    ) => {
        const { value } = e.target;
        const newInstructions = recipe.instructions;
        newInstructions[index] = value;
        setRecipe({ ...recipe, instructions: newInstructions });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/recipes", recipe);
            alert("Recipe created successfully");
            setIsOpenModal(!isOpenModal);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="absolute top-0 left-0 flex justify-center items-center w-full h-screen bg-black overflow-hidden bg-opacity-50">
                <div className="sm:w-sm md:w-md lg:w-lg bg-white p-4 rounded-md">
                    <h1 className="text-3xl">Create New Recipe</h1>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                className="border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Description</label>
                            <textarea
                                name="description"
                                onChange={handleChange}
                                className="border"
                            ></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Ingredients</label>
                            {recipe.ingredients.map((ingredient, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    name="ingredients"
                                    value={ingredient}
                                    onChange={(e) =>
                                        handleIngredientChange(e, index)
                                    }
                                    className="border"
                                />
                            ))}
                            <button
                                type="button"
                                onClick={addIngredient}
                                className="border"
                            >
                                Add Ingredient
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Instructions</label>

                            {recipe.instructions.map((instruction, index) => (
                                <textarea
                                    key={index}
                                    name="instructions"
                                    value={instruction}
                                    onChange={(e) =>
                                        handleInstructionChange(e, index)
                                    }
                                    className="border"
                                ></textarea>
                            ))}
                            <button
                                type="button"
                                onClick={addInstruction}
                                className="border"
                            >
                                Add Ingredient
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Image URL</label>
                            <input
                                type="text"
                                name="imageUrl"
                                onChange={handleChange}
                                className="border"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="">Cooking Time (minutes)</label>
                            <input
                                type="number"
                                name="cookingTime"
                                onChange={handleChange}
                                className="border"
                            />
                        </div>

                        <div className="flex justify-center gap-4">
                            <button type="submit" className="border">
                                Create Recipe
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpenModal(!isOpenModal);
                                }}
                                className="border"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
