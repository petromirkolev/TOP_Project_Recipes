import recipes from "../src/modules/recipeStorage.js";
const navMenu = document.querySelector(".navigation-menu");

export default function addMenuItems() {
  navMenu.innerHTML = "";
  recipes.map((recipe) => {
    navMenu.insertAdjacentHTML(
      "beforeend",
      `<li><a class="recipe ${recipe.name.toLowerCase()}">${
        recipe.name
      }</a></li>`
    );
  });
}
