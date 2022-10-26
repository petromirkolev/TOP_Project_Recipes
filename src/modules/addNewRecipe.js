import recipes from "../modules/recipeStorage.js";
import addNewRecipeView from "../../views/addNewRecipeView.js";

export default function addNewRecipe(view) {
  document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();
    return console.log("hello from add new recipe");

    //   const name = document.querySelector("#name").textContent;
    // return name;
  });
}
