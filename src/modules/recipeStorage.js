let recipes = JSON.parse(localStorage.getItem("recipes"));
if (recipes == null) recipes = [];

export default recipes;
