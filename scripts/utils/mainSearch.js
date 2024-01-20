// input

// import { getOneIngredient } from '../components/ingredientsList.js';
import { recipes } from '../data/recipes.js';
import { displayAllRecipes } from '../index.js';
import { totalRecipes } from '../index.js';
import { selectedOptions } from './selectedOption.js';

// Déclaration de la variable searchInput
let searchInput;
let searchClose;
let results = [];

// Utilisation de la variable searchInput
searchInput = document.getElementById('search-input');
searchClose = document.querySelector('#search-close');
console.log(searchClose);

// listener
searchInput.addEventListener('input', function () {
      if (searchInput.value) {
            searchClose.style.display = 'block';
      } else {
            searchClose.style.display = 'none';
      }
      handleSearch();
      // totalRecipes();
});

searchClose.addEventListener('click', function () {
      searchInput.value = '';
      // a verifier pas terrible 😡
      handleSearch();
      location.reload();
})


//function de filtrage: mainSearch
function handleSearch() {
      const inputUser = searchInput.value.toLowerCase();
      console.log(inputUser);
      if (inputUser.length >= 3) {
            //selectedOptions = []; // a verifier
            results = recipes.filter(recipe => {
                  // a verifier
                  const titleIsFind = recipe.name.toLowerCase().includes(inputUser);
                  const ingredientIsFind = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(inputUser));
                  const descriptionisFind = recipe.description.toLowerCase().includes(inputUser);
                  return titleIsFind || ingredientIsFind || descriptionisFind;
            });
            console.log(results);
            // searchResults(results)
            totalRecipes()
            displayAllRecipes(results)
      };
};

// Chercher par tags
// function searchByFilter(selectedOptions) {
//       results = recipes.filter(recipe => {
//             return selectedOptions.some(filter => {
//                   if ( recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.toLowerCase()))) {
//                         return true
//                   }
//             })
//       })
//       displayAllRecipes(results);
//       // console.log(selectedOptions);
// }
function filterRecipes(selectedOptions) {
      results = recipes.filter(recipe => {
            return selectedOptions.every(filter => {
                  if (recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(filter.toLowerCase()))) {
                        return true;
                  } else if (recipe.appliance.toLowerCase().includes(filter.toLowerCase())) {
                        return true;
                  } else if (recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(filter.toLowerCase()))) {
                        return true;
                  } else {
                        return false;
                  }
            });

      });
  
      displayAllRecipes(results);
      // console.log(selectedOptions);
}

function updateResults(results) {
      const oneIngredients = getOneIngredient(results);

      const filterContainer = [ingredientList]
      console.log('je rentre dans results');
}


// Export
export { results, filterRecipes };