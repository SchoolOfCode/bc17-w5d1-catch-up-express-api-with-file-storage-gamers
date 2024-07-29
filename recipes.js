import { checkPrimeSync } from "node:crypto";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";
//import fileName from './recipes.json' assert {type: 'json'};
import express from "express";

const fileName = 'recipes.json'

// GET ALL RECIPES
export async function getRecipes() {
    const data = await fs.readFile(fileName , "UTF-8")
    return JSON.parse(data);
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {

}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}

getRecipes()
