import { getIngredients } from "../models/dishes.model.js";

export const getIngredientsList = () => {
  return getIngredients();
};
