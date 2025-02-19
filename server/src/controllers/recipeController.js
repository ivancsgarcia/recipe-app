import { UserModel } from "../models/userModel.js";
import { RecipeModel } from "../models/recipeModel.js";

// get all recipe
const getRecipes = async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
};

// get recipe by id
const getRecipeById = async (req, res) => {
    try {
        const recipeId = req.params.id;
        const response = await RecipeModel.findById(recipeId);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
};

// create recipe
const createRecipe = async (req, res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
};

// update recipe
const updateRecipe = () => {};

// delete recipe
const deleteRecipe = () => {};

// idk
const idunno = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findById(userId);
        req.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        res.json(error);
    }
};

// idk2
const idunnodin = async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findById(userId);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        req.json({ savedRecipes });
    } catch (error) {
        res.json(error);
    }
};

// export
export { getRecipes, getRecipeById, createRecipe, idunno, idunnodin };
