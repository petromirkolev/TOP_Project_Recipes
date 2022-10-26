import RecipeConstructor from "../src/modules/recipeConstructor.js";
import recipes from "../src/modules/recipeStorage.js";
const query = document.querySelector.bind(document);

export default function addNewRecipeView(recipeContainer) {
  const view = `
  <form class="add-recipe" action="#">
  <label for="name">Recipe name</label>
  <input type="text" name="name" id="name" minlength="1" placeholder="Pizza" required />
  <label for="image">Photo link</label>
  <input type="url" name="image" id="image" placeholder="https://example.com"/>
  <label for="ingridients">Ingridients</label>
  <p>(separate with white space in between)</p>
  <input type="text" name="ing" id="ing" placeholder="basil lemon water" minlength="10" />
  <label for="steps-to-prepare">Steps to prepare</label>
  <textarea
    id="steps-to-prepare"
    name="steps-to-prepare"
    minlength="10"
    rows="10"
    cols="50"
    placeholder="Boil water for 10 minutes. Add basil and lemon..."
  ></textarea>
  <label for="cooks-note">Cook's note</label>
  <input
    type="text"
    name="cooks-note"
    id="cooks-note"
    minlength="10"
    placeholder="Very delicious meal!"
    required
  />
  <button id="submit">Add recipe</button>
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
      query("#steps-to-prepare").value.length === 0 ||
      query("#cooks-note").value.length === 0
    )
      return;

    let name = query("#name").value;
    let image;
    urlCheck.test(query("#image").value)
      ? (image = query("#image").value)
      : (image = "");
    let ing = query("#ing").value.split(" ");
    let steps = query("#steps-to-prepare").value;
    let note = query("#cooks-note").value;

    // Create new recipe object
    const newRecipe = new RecipeConstructor(name, image, ing, steps, note);
    // Push object to recipes array
    recipes.push(newRecipe);
    // Empty input
    query("#name").value =
      query("#image").value =
      query("#ing").value =
      query("#steps-to-prepare").value =
      query("#cooks-note").value =
        "";
  });
}
