import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "csv-parse";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DishesFromCSV = async (): Promise<{
  dishes: Record<string, string>[];
  ingredients: string[];
}> => {
  const projectRoot = path.resolve(process.cwd());
  const csvFilePath = path.resolve(projectRoot, process.env.DATAPATH as string);
  const dishes: Record<string, string>[] = [];
  const ingredients: Set<string> = new Set<string>();
  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(
        parse({
          delimiter: ",",
          columns: true,
          skip_empty_lines: true,
        })
      )
      .on("data", (row: Record<string, string>) => {
        dishes.push(row);
        row?.ingredients.split(",").forEach((data: string) => {
          ingredients.add(data.toLowerCase().trim());
        });
      })
      .on("end", () =>
        resolve({ dishes, ingredients: Array.from(ingredients) })
      )
      .on("error", reject);
  });
};

export { DishesFromCSV };
