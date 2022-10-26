import recipeView from "../../views/recipeView.js";

export default function pageLoadView(recipeContainer) {
  const recipe = recipeView();
  recipeContainer.innerHTML = recipe;
}
