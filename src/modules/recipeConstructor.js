export default function recipeConstructor() {
  class Recipe {
    constructor(name, ing, steps, note) {
      this.name = name;
      this.ing = [];
      this.note = note;
      this.steps = [];
    }
    stepsToPrepare() {
      console.log("Steps to prepare");
    }
  }
}
