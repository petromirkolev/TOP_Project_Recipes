"use strict";

const query = document.querySelector.bind(document);
const singleRecipe = query(".single-recipe");
const recipeContainer = query(".recipe-container");
const header = query(".header");
const navigation = query(".navigation-container");

// TO DO
recipeContainer.innerHTML =
  '<object type="text/html" data="./recipes/pizza.html" ></object>';
