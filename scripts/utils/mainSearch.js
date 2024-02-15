// Déclaration de variables
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
});

//function de filtrage: mainSearch
function handleSearch() {
    console.log('je rentre dans mainsearch');
    const inputUser = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalisation des caractères
    console.log(inputUser);
  
    if (inputUser.length >= 3) {
        selectedOptions = []; // à vérifier
        // console.log('mainsearch', selectedOptions);
        console.log('selectedoptionsmainsearch=========',selectedOptions);
        results = recipes.filter(recipe => {
            // à vérifier
            const findInTitle = recipe.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputUser);
            const findInIngredients = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputUser));
            const findInDescription = recipe.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputUser);
  
            return findInTitle || findInIngredients || findInDescription;
        });
  
        updateFilterSearch(results);
        totalRecipes(results);
        displayAllRecipes(results);
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
    });;
    updateFilterSearch(results)
    totalRecipes(results)
    displayAllRecipes(results)
};

function getAvailableItemsByType(results, itemType) {
    const itemProperties = {
        'ingredients': 'ingredients',
        'ustensils': 'ustensils',
        'appliances': 'appliances',
    };
  
    const availableItems = results.reduce((items, recipe) => {
        const itemList = itemType in itemProperties ? recipe[itemProperties[itemType]] : [];
  
        if (Array.isArray(itemList)) {
            itemList.forEach(item => {
                if (typeof item === 'string') {
                    const lowercaseItem = item.toLowerCase();
                    if (!items.includes(lowercaseItem)) {
                        items.push(lowercaseItem);
                    }
                }
            });
  
            // Si l'élément est 'ingredients', ajouter tous les ingrédients de la recette
            if (itemType === 'ingredients') {
                recipe.ingredients.forEach(ingredient => {
                    const lowercaseIngredient = ingredient.ingredient.toLowerCase();
                    if (!items.includes(lowercaseIngredient)) {
                        items.push(lowercaseIngredient);
                    }
                });
            }
  
            // Si l'élément est 'ustensils', ajouter tous les ustensiles de la recette
            if (itemType === 'ustensils') {
                recipe.ustensils.forEach(ustensil => {
                    const lowercaseUstensil = ustensil.toLowerCase();
                    if (!items.includes(lowercaseUstensil)) {
                        items.push(lowercaseUstensil);
                    }
                });
            }
  
            // Si l'élément est 'appliances', ajouter l'appareil de la recette
            if (itemType === 'appliance') {
                const lowercaseAppliance = recipe.appliance.toLowerCase();
                if (!items.includes(lowercaseAppliance)) {
                    items.push(lowercaseAppliance);
                }
            }
        }
        return items;
    }, []);
  
    console.log(`${itemType} available items:`, availableItems);
    return availableItems;
};

// Fonction pour enlever l'item sélectionné de la liste
const removeItemFromArray = (array, itemToRemove) => array.filter(item => item !== itemToRemove);

// Fonction pour supprimer les éléments sélectionnés d'une liste
const removeSelectedItems = (items, selectedOptions) => items.filter(item => !selectedOptions.includes(item));

// Fonction pour mettre à jour les listes avec les éléments disponibles
const updateFilterLists = (oneIngredients, oneUstensils, oneAppliances) => {
    updateFilterList(ingredientList, removeSelectedItems(oneIngredients, selectedOptions));
    updateFilterList(ustensilsList, removeSelectedItems(oneUstensils, selectedOptions));
    updateFilterList(appliancesList, removeSelectedItems(oneAppliances, selectedOptions));
    totalRecipes(results);
    displayAllRecipes(results);
};

// Fonction pour mettre à jour le contenu des listes avec les éléments disponibles
function updateFilterList(listContainer, items) {
    // Effacez le contenu actuel de la liste
    listContainer.innerHTML = '';

    // Ajoutez les éléments disponibles à la liste
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.onclick = function () {
            toggleSelectedOption(this.textContent);
        };
        listContainer.appendChild(listItem);
    });
}

function updateFilterSearch(results) {
    console.log('Je rentre dans updateFilterSearch avec les résultats suivants :', results);

    const oneIngredients = getAvailableItemsByType(results, 'ingredients');
    const oneUstensils = getAvailableItemsByType(results, 'ustensils');
    const oneAppliances = getAvailableItemsByType(results, 'appliance');

    // console.log('oneIngredients:', oneIngredients);
    // console.log('oneUstensils:', oneUstensils);
    // console.log('oneAppliances:', oneAppliances);

    const filterContainers = [ingredientList, ustensilsList, appliancesList];
    // console.log('filterContainers:', filterContainers);

    // Mettre à jour le contenu des listes
    updateFilterLists(oneIngredients, oneUstensils, oneAppliances);
    // Mettre à jour le total des recettes
    totalRecipes(results);

    selectedOptions.forEach(filter => {
        const findInIngredient = oneIngredients.includes(filter);
        const findInUstensil = oneUstensils.includes(filter);
        const findInAppliance = oneAppliances.includes(filter);

        console.log(`Filter: ${filter}, Trouvé dans Ingredients: ${findInIngredient}, Trouvé dans Ustensils: ${findInUstensil}, Trouvé dans Appliances: ${findInAppliance}`);
    });
};
  
