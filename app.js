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
    res.status(200).send ({ // Send the recipes as a JSON response
      success: true,
      payload: recipes
    })
  } catch (error) {
    res.status(500).send({ // Send a 500 status code if there's an error
    success: false,
    payload: "Error reading recipes"
  })
}
});

app.get('/recipes/:id', async (req, res) => { // Define a GET endpoint for '/recipes/:id'
  try {
    const recipe = await getRecipeByID(req.params.id); // Call getRecipeByID with the id from the request parameters
    if (recipe) { // If the recipe is found
      res.status(200).send({ // Send the recipe as a JSON response
        success: true,
        payload: recipe
      });
    } else { // If the recipe is not found
      res.status(404).send({ // Send a 404 status code
        success: false,
        payload: "Not found"
      });
    }
  } catch (error) {
    res.status(500).send({ // Send a 500 status code if there's an error
      success: false,
      payload: "Error reading recipe ID"
    });
  }
});



app.post('/recipes', async (req, res) => { // Define a POST endpoint for '/recipes'
  try {
    const newRecipe = req.body; // Get the new recipe data from the request body
    const createdRecipe = await createRecipe(newRecipe); // Call createRecipe to add the new recipe
    res.status(201).send({ // Send the newly created recipe as a JSON response
      success: true,
      payload: createdRecipe
    });
  } catch (error) {
    res.status(500).send({ // Send a 500 status code if there's an error
      success: false,
      payload: "Error creating recipe"
    });
  }
});
// Additional routes and middleware would go here

app.listen(PORT, () => { // Start the server and listen on the defined port
  console.log(`Server is running on port ${PORT}`); // Log a message to the console
});