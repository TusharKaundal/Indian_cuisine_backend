import express from "express";
import { allDishes, dishById } from "../controllers/dishes.controller.js";
const router = express.Router();

// Get dish by ID
router.get("/:dishId", dishById);

// Get all dishes
router.get("/", allDishes);

export default router;
