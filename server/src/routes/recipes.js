import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/recipeModel.js";
import { UserModel } from "../models/userModel.js";
import {
    createRecipe,
    getRecipeById,
    getUserRecipes,
    getRecipes,
    verifyToken,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", verifyToken, getRecipes);

router.get("/:id", verifyToken, getRecipeById);

router.get("/user-recipes", verifyToken, getUserRecipes)

router.post("/", verifyToken, createRecipe);

router.put("/", verifyToken, async (req, res) => {
    const { userId, recipeId } = req.body;

    try {
        const user = await UserModel.findById(userId);
        const recipe = await RecipeModel.findById(recipeId);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({ savedRecipes: user.savedRecipes });
    } catch (error) {
        res.json(error);
    }
});

export { router as recipesRouter };
