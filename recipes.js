import { checkPrimeSync } from "node:crypto"; // Importing the checkPrimeSync function from the crypto module
import fs from "node:fs/promises"; // Importing the promises API from the fs module for file system operations
import { v4 as uuidv4 } from "uuid"; // Importing the v4 function from the uuid module and renaming it to uuidv4
//import fileName from './recipes.json' assert {type: 'json'}; // Importing the recipes.json file as a JSON module (commented out)
import express from "express"; // Importing the express module for creating a web server

const fileName = 'recipes.json'; // Defining the file name for the recipes JSON file

// GET ALL RECIPES
export async function readFile() { // Exporting an asynchronous function named readFile
    const data = await fs.readFile(fileName , "UTF-8") // Reading the content of the recipes JSON file as a UTF-8 string
    return JSON.parse(data); // Parsing the JSON string into a JavaScript object and returning it
}

export async function getRecipes() { // Exporting an asynchronous function named getRecipes
    return await readFile(); // Calling the readFile function and returning its result
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) { // Exporting an asynchronous function named getRecipeByID
  const recipes = await readFile() // Calling the readFile function and storing its result in the recipes variable
  return recipes.find(recipe => recipe.id === id); // Finding and returning the recipe with the matching id
}




// CREATE A RECIPE
export async function writeFile(fileName, data) {
}

export async function createRecipe(newRecipe) { // Exporting an asynchronous function named createRecipe (not implemented)
  const recipes = await readFile(); // Read existing recipes
  const recipe = {
    id: uuidv4(), // Generate a unique ID for the new recipe
    ...newRecipe, // Spread the new recipe properties
  };
  recipes.push(recipe); // Add the new recipe to the list
  await writeFile(recipes); // Write the updated list back to the file
  return recipe; // Return the newly created recipe
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {} // Exporting an asynchronous function named updateRecipeByID (not implemented)

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {} // Exporting an asynchronous function named deleteRecipeByID (not implemented)