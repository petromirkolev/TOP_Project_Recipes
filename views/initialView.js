export default function initialView(recipeContainer) {
  const view = `
<div class="initial-view">
  <h1>Welcome to Odin Recipes!</h1>
  <h3>
    The place where you will find or present your favourite recipes!
  </h3>
</div>`;
  recipeContainer.innerHTML = view;
}
