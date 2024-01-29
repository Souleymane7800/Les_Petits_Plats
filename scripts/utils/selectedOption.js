

// Déclaration de la variable selectedOptions
// let selectedOptions = [];

// function toggleSelectedOption(tagselected) {
//       const index = selectedOptions.indexOf(tagselected);
//       if (index === -1) {
//           selectedOptions.push(tagselected);
//       } else {
//           selectedOptions.splice(index, 1);
//       }
//       console.log('selectedOptions',selectedOptions);
//       console.log('tagselected',tagselected);
//     // filterRecipes(selectedOptions)
//     // totalRecipes();

// }

function toggleSelectedOption(tagselected) {
    if (!selectedOptions.includes(tagselected)) {
        selectedOptions.push(tagselected);
    } else {
        selectedOptions = selectedOptions.filter(item => item !== tagselected);
    }
    console.log('selectedOptions', selectedOptions);
    console.log('tagselected', tagselected);
    filterRecipes(selectedOptions)
    // filterRecipes(selectedOptions)
    // totalRecipes();
}






// export { toggleSelectedOption, selectedOptions }