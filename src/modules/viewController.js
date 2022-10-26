import recipeView from "../../views/recipeView.js";
import initialView from "../../views/initialView.js";
import addNewRecipeView from "../../views/addNewRecipeView.js";
let currentView;

export default function viewController(recipeContainer, view) {
  switch (view) {
    case "initialView":
      currentView = initialView(recipeContainer);
      break;
    case "addNew":
      currentView = addNewRecipeView(recipeContainer);
      break;
    case "recipeView":
      currentView = recipeView();
      recipeContainer.innerHTML = currentView;
      break;
    default:
      currentView = initialView();
      recipeContainer.innerHTML = currentView;
      break;
  }
}
