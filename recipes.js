import fs from "node:fs/promises"; // Importing the promises API from the fs module for file system operations
import { v4 as uuidv4 } from "uuid"; // Importing the v4 function from the uuid module and renaming it to uuidv4

const fileName = 'recipes.json'; // Defining the file name for the recipes JSON file

// Function to read the file
export async function readFile() {
  const data = await fs.readFile(fileName, "UTF-8"); // Reading the content of the recipes JSON file as a UTF-8 string
  return JSON.parse(data); // Parsing the JSON string into a JavaScript object and returning it
}

// Function to write to the file
export async function writeFile(data) {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2), "UTF-8"); // Writing the JSON string to the file
}

// Function to get all recipes
export async function getRecipes() {
  return await readFile(); // Calling the readFile function and returning its result
}

// Function to get a recipe by ID
export async function getRecipeByID(id) {
  const recipes = await readFile(); // Calling the readFile function and storing its result in the recipes variable
  return recipes.find(recipe => recipe.id === id); // Finding and returning the recipe with the matching id
}

// Function to create a new recipe
export async function createRecipe(newRecipe) {
  const recipes = await readFile(); // Read existing recipes
  const recipe = {
    id: uuidv4(), // Generate a unique ID for the new recipe
    ...newRecipe, // Spread the new recipe properties
  };
  recipes.push(recipe); // Add the new recipe to the list
  await writeFile(recipes); // Write the updated list back to the file
  return recipe; // Return the newly created recipe
}

// Function to update a recipe by ID (not implemented)
export async function updateRecipeByID(id, updatedRecipe) {
  // Implementation goes here
}

// Function to delete a recipe by ID (not implemented)
export async function deleteRecipeByID(id) {
  // Implementation goes here
}