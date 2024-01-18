// input

// import { getOneIngredient } from '../components/ingredientsList.js';
import { recipes } from '../data/recipes.js';
import { displayAllRecipes } from '../index.js';
import { totalRecipes } from '../index.js';
import { selectedOptions } from './selectedOption.js';

// Déclaration de la variable searchInput
let searchInput;
let results = [];

// Utilisation de la variable searchInput
searchInput = document.getElementById('search-input');

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
            selectedOptions = []; // a verifier
            results = recipes.filter(recipe => {
                  // a verifier
                  const titleIsFind = recipe.name.toLowerCase().includes(inputUser);
                  const ingredientIsFind = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(inputUser));
                  const descriptionisFind = recipe.description.toLowerCase().includes(inputUser);
                  return titleIsFind || ingredientIsFind || descriptionisFind;
            });
            console.log(results);
            displayAllRecipes(results)
      };
};

// Chercher par tags
function searchByFilter(selectedOptions) {
      results = recipes.filter(recipe => {
            return selectedOptions.some(filter => {
                  if ( recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.toLowerCase()))) {
                        return true
                  }
            })
      })
      displayAllRecipes(results);
      // console.log(selectedOptions);
}



// Export
export { results, searchByFilter };