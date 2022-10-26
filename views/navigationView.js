import recipes from "../src/modules/recipeStorage.js";
const navMenu = document.querySelector(".navigation-menu");

export default function addMenuItems() {
  navMenu.innerHTML = "";

  if (recipes.length !== 0) {
    recipes.map((recipe) => {
      const listItem = document.createElement("li");
      const linkItem = document.createElement("a");
      listItem.appendChild(linkItem);
      linkItem.classList.add(recipe.name.toLowerCase());
      linkItem.classList.add("recipe");

      linkItem.textContent = recipe.name;
      navMenu.appendChild(listItem);
    });
  }
}
