

// Déclaration de la variable selectedOptions
// let selectedOptions = [];

function toggleSelectedOption(ingredient) {
      const index = selectedOptions.indexOf(ingredient);
      if (index === -1) {
          selectedOptions.push(ingredient);
      } else {
          selectedOptions.splice(index, 1);
      }
      console.log('selectedOptions',selectedOptions);
    // filterRecipes(selectedOptions)
    // totalRecipes();

}








// export { toggleSelectedOption, selectedOptions }