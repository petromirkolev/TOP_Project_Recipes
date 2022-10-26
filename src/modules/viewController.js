import recipeView from "../../views/recipeView.js";
import initialView from "../../views/initialView.js";
import addNewRecipeView from "../../views/addNewRecipeView.js";

export default function viewController(recipeContainer, view) {
  switch (view) {
    case "initialView":
      initialView(recipeContainer);
      break;
    case "addNew":
      addNewRecipeView(recipeContainer);
      break;
    case "recipeView":
      recipeView(recipeContainer);
    default:
      initialView(recipeContainer);
      break;
  }
}
