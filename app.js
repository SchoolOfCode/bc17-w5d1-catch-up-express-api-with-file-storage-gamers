import express from "express";
import fileName from 'recipes.json' assert {type: 'json'};

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());


console.log(getRecipes())

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
