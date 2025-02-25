import { useState } from "react";
import { useCookies } from "react-cookie";
import { useGetUserId } from "../hooks/useGetUserId";
import axios from "axios";
import { Header } from "../components/Header";
import { NavLink } from "react-router";

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

export const CreateRecipePage = () => {
    const userId = useGetUserId();
    const [cookies] = useCookies(["access_token"]);
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

    const removeIngredient = (index: number) => {
        const ingredients = recipe.ingredients.filter(
            (ingredient, i) => i !== index
        );
        setRecipe({ ...recipe, ingredients: [...ingredients] });
        console.log(recipe);
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

    const removeInstruction = (index: number) => {
        const instructions = recipe.instructions.filter(
            (instruction, i) => i !== index
        );
        setRecipe({ ...recipe, instructions: [...instructions] });
        console.log(recipe);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3001/recipes", recipe, {
                headers: { authorization: cookies.access_token },
            });
            alert("Recipe created successfully");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="container mx-auto">
                {/* Header */}
                <Header />

                {/* Content */}
                <form
                    onSubmit={onSubmit}
                    className="w-1/2 mx-auto mb-12 border p-4 rounded-md"
                >
                    <h1 className="text-3xl text-center mb-4">
                        Create New Recipe
                    </h1>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            required
                            className="border rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            onChange={handleChange}
                            required
                            className="border rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="">Description</label>
                        <textarea
                            name="description"
                            onChange={handleChange}
                            required
                            className="border rounded p-2"
                        ></textarea>
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="">Cooking Time (minutes)</label>
                        <input
                            type="number"
                            name="cookingTime"
                            onChange={handleChange}
                            required
                            className="border rounded p-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="block">
                            Ingredients
                        </label>
                        {recipe.ingredients.map((ingredient, index) => (
                            <div
                                key={index}
                                className="w-full flex gap-2 items-center"
                            >
                                <input
                                    type="text"
                                    name="ingredients"
                                    value={ingredient}
                                    onChange={(e) =>
                                        handleIngredientChange(e, index)
                                    }
                                    required
                                    className="w-full border mb-2 rounded p-2"
                                />
                                <div
                                    onClick={() => removeIngredient(index)}
                                    className="flex items-center justify-center rounded-full border size-8 hover:cursor-pointer"
                                >
                                    X
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addIngredient}
                            className="border rounded p-2"
                        >
                            Add Ingredient
                        </button>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="block">
                            Instructions
                        </label>

                        {recipe.instructions.map((instruction, index) => (
                            <div
                                key={index}
                                className="w-full flex gap-2 items-center"
                            >
                                <textarea
                                    key={index}
                                    name="instructions"
                                    value={instruction}
                                    onChange={(e) =>
                                        handleInstructionChange(e, index)
                                    }
                                    required
                                    className="w-full border mb-2 rounded p-2"
                                ></textarea>
                                <div
                                    onClick={() => removeInstruction(index)}
                                    className="flex items-center justify-center rounded-full border size-8 hover:cursor-pointer"
                                >
                                    X
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addInstruction}
                            className="border p-2 rounded"
                        >
                            Add Instruction
                        </button>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <button
                            type="submit"
                            className="border px-4 py-2 rounded"
                        >
                            Create Recipe
                        </button>
                        <NavLink
                            to={"/my-recipes"}
                            className="border px-4 py-2 rounded"
                        >
                            Cancel
                        </NavLink>
                    </div>
                </form>
            </div>
        </>
    );
};
