"use strict";
import addNewRecipe from "./modules/addNewRecipe.js";
import pageLoadView from "./modules/pageLoadView.js";
import addNewRecipeView from "../views/addNewRecipeView.js";
import addMenuItems from "../views/navigationView.js";
const query = document.querySelector.bind(document);
const addNewBtn = query(".add-new");
const recipeContainer = document.querySelector(".recipe-container");

// On page load
pageLoadView(recipeContainer);
addMenuItems();

// Add new Recipe
addNewBtn.addEventListener("click", addNewRecipeView);
