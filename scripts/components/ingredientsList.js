
// Récupération de la liste des ingrédients
const allIngredients = recipes.reduce((ingredients, recipe) => {
    recipe.ingredients.forEach(ingredient => {
        if (!ingredients.some(item => item.ingredient.toLowerCase() === ingredient.ingredient.toLowerCase())) {
            ingredients.push({
                ingredient: ingredient.ingredient.toLowerCase(),
            });
        }
    });
    return ingredients;
}, []);

// Récupération d'un seul ingrédient
function getOneIngredient(results) {
    const oneIngredient = results.reduce((ingredients, recipe) => {
        recipe.ingredients.forEach(ingredient => {
            const isIngredient = ingredients.find(item => item.toLowerCase() === ingredient.toLowerCase());
            if (!isIngredient) {
                ingredients.push(ingredient.toLowerCase());
            }
        });
        return ingredients;
    }, []);
    console.log(oneIngredient);
    return oneIngredient;
}

// Affichage des ingrédients dans la liste
const ingredientList = document.querySelector('#ingredient-list');
const selectedFilter = document.querySelector('#filter-options');

// let selectedOptions = [];

ingredientList.innerHTML = '';

if (selectedFilter.children.length === 0 && results.length === 0) {
    allIngredients.forEach(ingredient => {
        const ingredientElement = document.createElement('li');
        ingredientElement.textContent = ingredient.ingredient;
        ingredientElement.onclick = function () {
            toggleSelectedOption(this.textContent);
        };
        ingredientList.appendChild(ingredientElement);
    });
    
} else {
    const oneIngredients = getOneIngredient(results);
    oneIngredients.forEach(ingredient => {
        const ingredientElement = document.createElement('li');
        ingredientElement.textContent = ingredient.ingredient;
        ingredientElement.onclick = function () {
            toggleSelectedOption(this.textContent);
        };
        ingredientList.appendChild(ingredientElement);
    })
}

// export { allIngredients, getOneIngredient, ingredientList };