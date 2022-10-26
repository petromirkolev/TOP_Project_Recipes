"use strict";
import viewController from "./modules/viewController.js";
import addNewRecipe from "./modules/addNewRecipe.js";
import addNewRecipeView from "../views/addNewRecipeView.js";
import addMenuItems from "../views/navigationView.js";
const query = document.querySelector.bind(document);
const addNewBtn = query(".add-new");
const recipeContainer = document.querySelector(".recipe-container");

// On page load
viewController(recipeContainer, "initial");
addMenuItems();

// Add new Recipe
addNewBtn.addEventListener("click", (e) => {
  viewController(recipeContainer, "addNew");
});
