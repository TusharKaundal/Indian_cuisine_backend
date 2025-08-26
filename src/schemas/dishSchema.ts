import z from 'zod';
import { sanitizeData } from '../utils/helper.js';

export const DishSchema = z.object({
    id: z.uuid().default(() => crypto.randomUUID()),
    name: z.string().toLowerCase(),
    ingredients: z.preprocess(
        (val: string) => val.split(",").map((item: string) => item.trim().toLowerCase()),
        z.array(z.string())
    ),
    diet: z.enum(["vegetarian", "non vegetarian"]),
    prep_time: z.preprocess(
        sanitizeData,
        z.number().nullable()
    ),
    cook_time: z.preprocess(
        sanitizeData,
        z.number().nullable()
    ),
    flavor_profile: z.preprocess(
        sanitizeData,
        z.string().nullable()
    ),
    course: z.string().toLowerCase(),
    state: z.preprocess(
        sanitizeData,
        z.string().nullable()
    ),
    region: z.preprocess(
        sanitizeData,
        z.string().nullable()
    ),
});

export type Dish = z.infer<typeof DishSchema>;
export default DishSchema;