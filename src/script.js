"use strict";
import recipeView from "../recipes/recipeView.js";
const query = document.querySelector.bind(document);
const singleRecipe = query(".single-recipe");
const recipeContainer = query(".recipe-container");
const header = query(".header");
const navigation = query(".navigation-container");

// TO DO
const recipe = recipeView();
recipeContainer.innerHTML = recipe;
