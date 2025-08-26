import express from 'express';
import dishesRoute from './dishes.route.js';
import ingredientRoute from './ingredient.route.js';
const router = express.Router();
router.use('/dishes', dishesRoute);
router.use('/ingredients', ingredientRoute);
export default router;
