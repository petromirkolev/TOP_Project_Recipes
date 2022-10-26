import RecipeConstructor from "../src/modules/recipeConstructor.js";
import recipes from "../src/modules/recipeStorage.js";
const query = document.querySelector.bind(document);

export default function addNewRecipeView(recipeContainer) {
  const view = `
  <form class="add-recipe" action="#">
  <label for="name">Recipe name</label>
  <input type="text" name="name" id="name" minlength="1" required />
  <label for="image">Photo link</label>
  <input type="url" name="image" id="image" />
  <label for="ingridients">Ingridients</label>
  <input type="text" name="ing" id="ing" minlength="10" />
  <label for="steps-to-prepare">Steps to prepare</label>
  <textarea
    id="steps-to-prepare"
    name="steps-to-prepare"
    minlength="10"
    rows="10"
    cols="50"
  ></textarea>
  <label for="cooks-note">Cook's note</label>
  <input
    type="text"
    name="cooks-note"
    id="cooks-note"
    minlength="10"
    required
  />
  <button type="submit" id="submit">Add recipe</button>
</form>
  `;
  // Set view
  recipeContainer.innerHTML = view;
  // Get recipe data
  document.querySelector("#submit").addEventListener("click", (e) => {
    const urlCheck =
      /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

    if (
      query("#name").value.length === 0 ||
      !urlCheck.test(query("#image").value) ||
      query("#steps-to-prepare").value.length === 0 ||
      query("#cooks-note").value.length === 0
    )
      return;

    let name = query("#name").value;
    let image = query("#image").value;
    let [ing] = [...query("#ing").value];
    let steps = query("#steps-to-prepare").value;
    let note = query("#cooks-note").value;
    const newRecipe = new RecipeConstructor(name, image, ing, steps, note);
    recipes.push(newRecipe);
    console.log(recipes);
  });
}
