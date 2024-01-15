// input

// import { recipes } from ".";
import { recipes } from '../data/recipes.js';
import { displayAllRecipes } from '../index.js';
import { totalRecipes } from '../index.js'

console.log(recipes);
// Déclaration de la variable searchInput
let searchInput;
let results = [];

// Utilisation de la variable searchInput
searchInput = document.getElementById('search-input');
console.log(searchInput);

// listener
searchInput.addEventListener('input', function () {
      handleSearch();
      totalRecipes();
});


//function de filtrage: mainSearch
function handleSearch() {
      const inputUser = searchInput.value.toLowerCase();
      console.log(inputUser);
      if (inputUser.length >= 3) {
            results = recipes.filter(recipe => {
                  // a verifier
                  const titleMatch = recipe.name.toLowerCase().includes(inputUser);
                  const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(inputUser));
                  const descriptionMatch = recipe.description.toLowerCase().includes(inputUser);
                  return titleMatch || ingredientsMatch || descriptionMatch;
            });
            console.log(results);
            displayAllRecipes(results)
      }
}
// handleSearch()


// Exporte results
export { results };