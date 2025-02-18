import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const recipeId = req.params.id;
        const response = await RecipeModel.findById(recipeId);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

router.post("/", async (req, res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
});

router.put("/", async (req, res) => {
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

router.get("/savedRecipes/ids", async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findById(userId);
        req.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        res.json(error);
    }
});

router.get("/savedRecipes", async (req, res) => {
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
});

export { router as recipesRouter };
