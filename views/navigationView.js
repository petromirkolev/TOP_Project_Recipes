import recipes from "../src/modules/recipeStorage.js";
const navMenu = document.querySelector(".navigation-menu");

export default function addMenuItems() {
  navMenu.innerHTML = "";
  recipes.map((recipe) => {
    navMenu.insertAdjacentHTML(
      "afterbegin",
      `<li><a class="${recipe.name.split(" ").join("")}"> ${
        recipe.name
      }</a></li>`
    );
  });
  console.log("Hey");
  console.log("Hey");
}
