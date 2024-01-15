// Import des scripts
import { recipes } from '../scripts/data/recipes.js';

// AddEventListener
document.addEventListener('DOMContentLoaded', function () {
    displayAllRecipes(recipes);
    totalRecipes(recipes)
})


// Afficher toute les recettes
function displayAllRecipes(results) {

      // Construction du chemin relatif pour l'image
    //   const imagePath = `../images/recettes/${recipes.image}`;

     
    results = results || [];

    const recipeSection = document.getElementById('recipeSection');
    recipeSection.innerHTML = '';


    if (Array.isArray(results)) {
        results.forEach((recipe, index) => {
            const card = createRecipeCard(recipe, index);
            recipeSection.appendChild(card);
        });
    } else {
        console.error('Results is not an array:', results);
    }
}




// Création du dom pour les cards
function createRecipeCard(recipe, index) {

    const card = document.createElement( 'div' );
    card.classList.add('card-container');
    card.id = `card-container-${index + 1}`;
    // Article
    const article = document.createElement( 'article' );
    article.classList.add('card-recipe');
    // Image
    const image = document.createElement( 'img' );
    image.src = `./images/recettes/${recipe.image}`;
    image.alt = recipe.name;
    image.classList.add('card-image');
    // Time
    const recipeTime = document.createElement( 'div' );
    recipeTime.classList.add('recipe-time');
    recipeTime.textContent = `${recipe.time}min`;
    // Description
    const containerDescText = document.createElement( 'div' );
    containerDescText.classList.add('card-desc');
    // Non de la recette
    const cardName = document.createElement( 'h1' );
    cardName.textContent = recipe.name;
    // Recette
    const recette = document.createElement( 'h2' );
    recette.textContent = 'Recette';
    // Description
    const descContainer = document.createElement( 'div' );
    descContainer.classList.add('desc-container');
    // Description de la recette
    const recipeDesc = document.createElement( 'div' );
    recipeDesc.classList.add('recipe-desc');
    recipeDesc.textContent = recipe.description;
    // Ingredient
    const ingredient = document.createElement( 'h2' );
    ingredient.textContent = 'Ingredients';
    const ingredientRecipe = document.createElement( 'div' );
    ingredientRecipe.classList.add('recipe-ingredient');

    // Ingredients et quantité
    recipe.ingredients.forEach((ingredient, index) => {
        const ingredientContainer = document.createElement( 'div' );
        ingredientContainer.classList.add(`ingredient${index + 1}`);

        const ingredientName = document.createElement( 'p' );
        ingredientName.classList.add('ingredient-name');
        ingredientName.textContent = ingredient.ingredient;

        const ingredientQty = document.createElement( 'p' );
        ingredientQty.classList.add('ingredient-quantity');
        // a verifier
        ingredientQty.textContent = `${ingredient.quantity !== undefined ? ingredient.quantity : ''} ${ingredient.unit !== undefined ? ingredient.unit : ''}`

        // Liaison au dom
        ingredientContainer.appendChild(ingredientName);
        ingredientContainer.appendChild(ingredientQty);
        ingredientRecipe.appendChild(ingredientContainer)
    });



    descContainer.appendChild(recipeDesc);
    containerDescText.appendChild(cardName);
    containerDescText.appendChild(recette);
    containerDescText.appendChild(recipeDesc);
    containerDescText.appendChild(ingredient);
    containerDescText.appendChild(ingredientRecipe);
    article.appendChild(image);
    article.appendChild(recipeTime);
    article.appendChild(containerDescText);
    card.appendChild(article)




    return card

}

// Compteur de recette
function totalRecipes() {
    const containerCount = document.getElementById('total-recipes');
    const recipesCards = document.querySelectorAll('.card-container');
    const totalOfRecipes = recipesCards.length;
    let recipesCount;

    if (totalOfRecipes === 0) {
        recipesCount = 'Aucune recette n\a été trouvée'
    } else {
        recipesCount = totalOfRecipes.length === 1 ? 'recette' : 'recettes';
    }
    containerCount.textContent = totalOfRecipes === 0 ? recipesCount : `${totalOfRecipes} ${recipesCount}`;
    console.log(recipesCards.length);
    console.log(containerCount);
}
totalRecipes()

export { displayAllRecipes, totalRecipes}





