// import { searchByFilter } from './mainSearch.js';
// import { displayAllRecipes } from '../index.js';
// import { results } from './mainSearch.js';

// Déclaration de la variable selectedOptions
let selectedOptions = [];

function toggleSelectedOption(ingredient) {
      const index = selectedOptions.indexOf(ingredient);
      if (index === -1) {
          selectedOptions.push(ingredient);
      } else {
          selectedOptions.splice(index, 1);
      }
      console.log(selectedOptions);


}








export { toggleSelectedOption, selectedOptions }