import { useState } from "react";
import axios from "axios";
import { useGetUserId } from "../hooks/useGetUserId";

export const CreateRecipePage = () => {
    const userId = useGetUserId();
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTIme: 0,
        userOwner: userId,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const addIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
    };

    const handleIngredientChange = (e, index) => {
        const { value } = e.target;
        const ingredients = recipe.ingredients;
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http:127.0.0.1:3001/recipes", recipe);
            alert("Recipe created");
        } catch (error) {
            console.error(error);
        }
    };
    console.log(recipe)
    return (
        <div>
            <h1>Create Recipe</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange} />

                {/* <label htmlFor="">Description</label>
                <textarea name="" id=""></textarea> */}

                <label htmlFor="">Ingredients</label>
                {recipe.ingredients.map((ingredient, index) => (
                    <input
                        key={index}
                        type="text"
                        name="ingredients"
                        id=""
                        value={ingredient}
                        onChange={(e) => handleIngredientChange(e, index)}
                    />
                ))}
                <button type="button" onClick={addIngredient}>
                    Add Ingredient
                </button>

                <label htmlFor="">Instructions</label>
                <textarea
                    name="instructions"
                    id=""
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="">Image URL</label>
                <input
                    type="text"
                    name="imageUrl"
                    id=""
                    onChange={handleChange}
                />

                <label htmlFor="">Cooking Time (minutes)</label>
                <input
                    type="number"
                    name="cookingTime"
                    onChange={handleChange}
                />
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    );
};
