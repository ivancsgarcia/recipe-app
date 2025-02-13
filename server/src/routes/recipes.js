import express from "express";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (error) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    const newRecipe = new RecipeModel(req.body);
    try {
        const response = await newRecipe.save();
        res.json(response);
    } catch (error) {
        res.json(err);
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
        res.json(err);
    }
});

router.get("/savedRecipes/ids", async (req, res) => {
    const { userId } = req.body;
    try {
        const user = await UserModel.findById(userId);
        req.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        res.json(err);
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
        res.json(err);
    }
});

export { router as recipesRouter };
