import { getDishes } from "../models/dishes.model.js";
import { type Dish } from "../schemas/dishSchema.js";

export const getAllDishes = async (): Promise<Dish[]> => {
  return await getDishes();
};

export const getDishById = async (id: string): Promise<Dish | undefined> => {
  const dishes = await getAllDishes();
  console.log(id)
  return dishes.find(dish => dish.id === id);
};

