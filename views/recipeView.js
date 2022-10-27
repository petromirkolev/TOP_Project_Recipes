import recipes from "../src/modules/recipeStorage.js";

export default function recipeView(recipeContainer, classList) {
  let view;

  recipes.map((recipe) => {
    if (recipe.name.split(" ").join("").toLowerCase() === classList) {
      view = `<h1>${recipe.name}</h1>
      <img
        src="${recipe.image}"
        alt="${recipe.name}"
      />
      <h3>Ingridients</h3>
      <ul class>
      ${recipe.ing
        .map((ing) => `<li> - ${ing}</li>`)
        .toString()
        .split(",")
        .join(" ")}
      </ul>
      <h3>Steps to prepare</h3>
      <p>
      ${recipe.steps}
      </p>
      <h3>Cook's note</h3>
      <p>${recipe.note}</p>
      `;
    }
  });

  recipeContainer.innerHTML = view;
}
