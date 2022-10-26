import recipeView from "../../views/recipeView.js";
import initialView from "../../views/initialView.js";
import addNewRecipeView from "../../views/addNewRecipeView.js";

export default function viewController(recipeContainer, view, classList) {
  switch (view) {
    case "initialView":
      initialView(recipeContainer);
      break;
    case "addNew":
      addNewRecipeView(recipeContainer);
      break;
    case "recipeView":
      // Pass classList to view
      recipeView(recipeContainer, classList);
      break;
    default:
      initialView(recipeContainer);
      break;
  }
}
