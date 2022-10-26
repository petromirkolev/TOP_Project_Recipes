"use strict";
import recipeView from "../views/recipeView.js";
import addNewRecipe from "./modules/addNewRecipe.js";
const query = document.querySelector.bind(document);
const recipeContainer = query(".recipe-container");
const addNewBtn = query(".add-new");

// TO DO

addNewBtn.addEventListener("click", (e) => {
  addNewRecipe();
});

const recipe = recipeView();
recipeContainer.innerHTML = recipe;

class Recipe {
  constructor(name, ing, steps, note) {
    this.name = name;
    this.ing = [];
    this.note = note;
    this.steps = [];
  }
  stepsToPrepare() {
    console.log("Steps to prepare");
  }
}
