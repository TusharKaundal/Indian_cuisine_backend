import DishSchema, { type Dish } from "../schemas/dishSchema.js";
import { DishesFromCSV } from "../utils/csvSeeder.js";
import z from "zod";

const cachedDishes: Dish[] = [];
const cachedIngredients: string[] = [];

export const getDishes = async (): Promise<Dish[]> => {
  if (cachedDishes.length === 0) {
    const { dishes } = await DishesFromCSV();
    const parsedDishes = dishes.map((dish) => DishSchema.parse(dish));
    cachedDishes.push(...parsedDishes);
  }
  return cachedDishes;
};

export const getIngredients = async (): Promise<string[]> => {
  if (cachedIngredients.length === 0) {
    const { ingredients } = await DishesFromCSV();
    const response = z.array(z.string()).parse(ingredients);
    cachedIngredients.push(...response);
  }
  return cachedIngredients.sort();
};
