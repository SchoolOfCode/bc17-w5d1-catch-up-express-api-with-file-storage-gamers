import express from "express"; // Import the express module

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js"; // Import functions from recipes.js

const app = express(); // Create an instance of express
const PORT = 3000; // Define the port number

app.use(express.static("public")); // Serve static files from the "public" directory
app.use(express.json()); // Parse incoming JSON requests

app.get('/recipes', async (req, res) => { // Define a GET endpoint for '/recipes'
  try {
    const recipes = await getRecipes(); // Call getRecipes to fetch all recipes
    res.json(recipes); // Send the recipes as a JSON response
  } catch (error) {
    res.status(500).send("Error reading recipes"); // Send a 500 status code if there's an error
  }
});

app.listen(PORT, () => { // Start the server and listen on the defined port
  console.log(`Server listening on port ${PORT}`); // Log a message when the server starts
});
