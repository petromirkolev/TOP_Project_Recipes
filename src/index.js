"use strict";
import viewController from "./modules/viewController.js";
import addMenuItems from "../views/navigationView.js";
import recipes from "./modules/recipeStorage.js";
const query = document.querySelector.bind(document);
const addNewBtn = query(".add-new");
const menuBtn = query(".expand");
const deleteRecipes = query(".clear-recipes");
const navigation = query(".navigation-menu");
const naviContainer = query(".navigation-container");
const closeMenu = query(".close-menu");
export const recipeContainer = document.querySelector(".recipe-container");

// On page load
const onPageLoad = () => {
  viewController(recipeContainer, "initial");
  addMenuItems();
};

// Add new Recipe
addNewBtn.addEventListener("click", (e) => {
  viewController(recipeContainer, "addNew");
  naviContainer.style.display = "none";
  menuBtn.style.display = "inline-block";
});

// Delete all recipes
deleteRecipes.addEventListener("click", (e) => {
  const navMenu = document.querySelector(".navigation-menu");
  recipes.length = 0;
  localStorage.clear();
  navMenu.innerHTML = "";
  viewController(recipeContainer, "initial");
});

// View recipe
navigation.addEventListener("click", (e) => {
  if (!e.target.classList.contains("recipe")) return;
  // Pass classList to controller so we can find the recipe in recipes array
  const classList = e.target.classList[0];
  viewController(recipeContainer, "recipeView", classList);
  naviContainer.style.display = "none";
  menuBtn.style.display = "inline-block";
});

// Go to home page
query(".header-logo").addEventListener("click", onPageLoad);

// Show mobile menu
menuBtn.addEventListener("click", (e) => {
  showMobileMenu();
});

// Initial page load
onPageLoad();

const showMobileMenu = () => {
  menuBtn.style.display = "none";
  naviContainer.style.display = "inline-block";
};

closeMenu.addEventListener("click", (e) => {
  closeMobileMenu();
});

const closeMobileMenu = () => {
  naviContainer.style.display = "none";
  menuBtn.style.display = "inline-block";
};
