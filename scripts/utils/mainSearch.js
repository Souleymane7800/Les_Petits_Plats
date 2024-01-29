

// Utilisation de la variable searchInput
searchInput = document.getElementById('search-input');
searchClose = document.querySelector('#search-close');

// listener sur main input
searchInput.addEventListener('input', function () {
      if (searchInput.value) {
            searchClose.style.display = 'block';
      } else {
            searchClose.style.display = 'none';
      }
      handleSearch();
      totalRecipes();
});

searchClose.addEventListener('click', function () {
      searchInput.value = '';
      // a verifier pas terrible 😡
      handleSearch();
      location.reload();
})


//function de filtrage: mainSearch
function handleSearch() {
      console.log('je rentre dans mainsearch');
      const inputUser = searchInput.value.toLowerCase();
      console.log(inputUser);
      if (inputUser.length >= 3) {
            selectedOptions = []; // a verifier
            console.log('mainsearch',selectedOptions);
            results = recipes.filter(recipe => {
                  // a verifier
                  const findInTitle = recipe.name.toLowerCase().includes(inputUser);
                  const findInIngredients = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(inputUser));
                  const findInDescription = recipe.description.toLowerCase().includes(inputUser);
                  return findInTitle || findInIngredients || findInDescription;
            });
            console.log(results);
            totalRecipes(results)
            displayAllRecipes(results)
      };
};

// ----------------------------------> Recherche par filtre et afficher le results et update
function filterRecipes(selectedOptions) {
      results = recipes.filter(recipe => {
            return selectedOptions.every(filter => {
                  if (recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.toLowerCase()))) {
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
      displayAllRecipes(results)
      totalRecipes(results)
}
// -------------------------------------------------------------------------------

