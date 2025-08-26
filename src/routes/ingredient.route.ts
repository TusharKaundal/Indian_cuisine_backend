import express from "express";
import { allIngredients } from "../controllers/ingredient.controller.js";
const router = express.Router();

router.get("/", allIngredients);

export default router;
