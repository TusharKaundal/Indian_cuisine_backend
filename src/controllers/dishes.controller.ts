import { getAllDishes, getDishById } from "../services/dishes.service.js";
import type { Response, Request } from "express";

export const dishById = async (req: Request, res: Response) => {
  try {
    const dish = await getDishById(req.params.dishId);
    if (!dish) {
      return res.status(404).json({ error: "Dish not found" });
    }
    res.json(dish);
  } catch (error) {
    console.error("Error getting dish:", error);
    res.status(500).json({ error: "Failed to get dish data" });
  }
};

export const allDishes = async (req: Request, res: Response) => {
  try {
    const dishes = await getAllDishes();
    res.json(dishes);
  } catch (error) {
    console.error("Error getting dishes:", error);
    res.status(500).json({ error: "Failed to get dishes data" });
  }
};
