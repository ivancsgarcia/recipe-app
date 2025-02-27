import { UserModel } from "../models/userModel.js";
import { RecipeModel } from "../models/recipeModel.js";
import jwt from "jsonwebtoken";

// get all recipe
const getRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find({userOwner: req.user.id});
        if(!recipes === 0) { 
            console.log('No recipes found')
        }
        res.json(recipes);
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

// get user's own recipe
const getUserRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find({ userOwner: req.user.id });
        res.json(recipes);
    } catch (error) {
        res.json(error);
    }
};

// create recipe
const createRecipe = async (req, res) => {
    console.log(req.user);
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
};

// update recipe
const updateRecipe = async (req, res) => {};

// delete recipe
const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await RecipeModel.findOneAndDelete({
            _id: req.params.id,
        });
        res.json(`${deletedRecipe.name} deleted successfully`);
    } catch (error) {
        res.json({ error });
    }
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.user = decoded; 
    });

    next();
};

// export
export { getRecipes, getRecipeById, getUserRecipes, createRecipe, verifyToken };
