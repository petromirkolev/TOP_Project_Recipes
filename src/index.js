"use strict";
import viewController from "./modules/viewController.js";
import addMenuItems from "../views/navigationView.js";
import navMenu from "../views/navigationView.js";
const query = document.querySelector.bind(document);
const addNewBtn = query(".add-new");
const deleteRecipes = query(".clear-recipes");
const navigation = query(".navigation-menu");
export const recipeContainer = document.querySelector(".recipe-container");

// On page load
const onPageLoad = () => {
  viewController(recipeContainer, "initial");
  addMenuItems();
};

// Add new Recipe
addNewBtn.addEventListener("click", (e) => {
  viewController(recipeContainer, "addNew");
});

// Delete all recipes
deleteRecipes.addEventListener("click", (e) => {
  localStorage.clear();
  navMenu.innerHTML = "";
  viewController(recipeContainer, "initial");
});

// View recipe
navigation.addEventListener("click", (e) => {
  if (!e.target.classList.contains("recipe")) return;
  // Pass classList to controller so we can find the recipe in recipes array
  const classList = e.target.classList[1];
  viewController(recipeContainer, "recipeView", classList);
});

// Go to home page
query(".header-logo").addEventListener("click", onPageLoad);

onPageLoad();
