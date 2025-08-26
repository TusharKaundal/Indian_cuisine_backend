import type { Response, Request } from "express";
import { getIngredientsList } from "../services/ingredient.service.js";

export const allIngredients = async (req: Request, res: Response) => {
  try {
    const dishes = await getIngredientsList();
    res.json(dishes);
  } catch (error) {
    console.error("Error processing CSV:", error);
    res.status(500).json({ error: "Failed to process dishes data" });
  }
};
