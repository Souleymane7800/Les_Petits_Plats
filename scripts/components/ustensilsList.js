// Récupérer tous les ustensils
const allUstensils = recipes.reduce((ustensils, recipe) => {
      recipe.ustensils.forEach(ustensil => {
            const ustensilToLowercase = ustensil.toLowerCase();
            if (!ustensils.includes(ustensilToLowercase)) {
                  ustensils.push(ustensilToLowercase);
            }
      });
      return ustensils;
}, []);

// Récupérer un ustensil
function getOneUstensil(results) {
      console.log(results);
      const oneUstensils = results.reduce((ustensils, recipe) => {
            recipe.ustensils.forEach(ustensil => {
                  const ustensilToLowercase = ustensil.toLowerCase();
                  if (!ustensils.includes(ustensilToLowercase)) {
                        ustensils.push(ustensilToLowercase)
                  }
            });
            return ustensils;
      }, []);
      console.log('oneustensil',oneUstensils);
      return oneUstensils
};

const ustensilsList = document.querySelector('#ustensil-list');

ustensilsList.innerHTML = '';

if (selectedFilter.children.length === 0 && results.length === 0) {

      console.log('selectedfilter',selectedFilter);
      allUstensils.forEach(ustensil => {
            const ustensilElement = document.createElement('li');
            ustensilElement.textContent = ustensil;
            ustensilElement.onclick = function () {
                  toggleSelectedOption(this.textContent);
            };
            ustensilsList.appendChild(ustensilElement);
      });
    
} else {
      const oneUstensils = getOneUstensil(results);
      oneUstensils.forEach(ustensil => {
            const ustensilElement = document.createElement('li');
            ustensilElement.textContent = ustensil;
            ustensilElement.onclick = function () {
                  toggleSelectedOption(this.textContent);
            };
            ustensilsList.appendChild(ustensilElement);
      })
}
