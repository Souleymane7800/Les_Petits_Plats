// Déclaration de variables
let searchInput = document.getElementById('search-input');
let searchClose = document.querySelector('#search-close');

// listener sur main input
searchInput.addEventListener('input', function () {
	if (searchInput.value) {
		searchClose.style.display = 'block';
		handleSearch();
		totalRecipes();
	} else {
		searchClose.style.display = 'none';
	}
});

searchClose.addEventListener('click', function () {
	// Vérifie si pas de tag sélectionné
	if (!document.querySelector('.tagSelected')) {

		window.location.reload();

	} else {
        
		const inputUser = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		searchInput.value = '';

		// Retirer l'inputUser de selectedOptions s'il est présent
		const index = selectedOptions.indexOf(inputUser);
		if (index !== -1) {
			selectedOptions.splice(index, 1);
		}
		searchClose.style.display = 'none';
		updateFilterSearch(results);
		handleSearch();
	}
});

//function de filtrage: mainSearch
function handleSearch() {

	const inputUser = searchInput.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
	// Vérifier si la longueur de l'input est suffisante
	if (inputUser.length >= 3) {
	    	// Ajouter l'input utilisateur aux options sélectionnées
	    	selectedOptions.push(inputUser);

	    	// Filtrer les recettes en fonction de l'input et des options sélectionnées (tags)
	    	let results = [];
	    	for (let recipe of recipes) {
		  	const findInTitle = recipe.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputUser);
		  	const findInIngredients = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputUser));
		  	const findInDescription = recipe.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(inputUser);
  
		  	if (findInTitle || findInIngredients || findInDescription) {
				results.push(recipe);
		  	}
	    	};
  
	    	// S'il y a des options sélectionnées, filtrer davantage par tags
	    	if (selectedOptions.length > 0) {
		  	const filteredResults = [];
		  	for (const recipe of results) {
				let allFiltersMatch = true;
	    
				for (const filter of selectedOptions) {
			    		const findInIngredients = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.toLowerCase()));
			    		const findInAppliance = recipe.appliance.toLowerCase().includes(filter.toLowerCase());
			    		const findInUstensils = recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(filter.toLowerCase()));
					const findInTitle = recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filter.toLowerCase());
	    
			    		if (!(findInIngredients || findInAppliance || findInUstensils || findInTitle)) {
				  		allFiltersMatch = false;
				  		break;
			    		}
				}
	    
				if (allFiltersMatch) {
			    		filteredResults.push(recipe);
				}
			}

		  	results = filteredResults;
	    	}
  
	    	// Mettre à jour les résultats de la recherche avec filtres
	    	updateFilterSearch(results);
		filterRecipes(selectedOptions);
	    	displayAllRecipes(results);
	    	totalRecipes(results);
	} else {
		selectedOptions = [];
		resetPage();
	}
};

function resetPage() {
	displayAllRecipes(recipes)
};

// ----------------------------------> Recherche par filtre et afficher le results et update
function filterRecipes(selectedOptions) {
	let results = [];
    
	for (let i = 0; i < recipes.length; i++) {
	  	let recipe = recipes[i];
	  	let matchesFilter = true;
    
	  	for (let j = 0; j < selectedOptions.length; j++) {
	    		let filter = selectedOptions[j];
    
	    		if (
				!(
		  		recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(filter.toLowerCase())) ||
		  		recipe.appliance.toLowerCase().includes(filter.toLowerCase()) ||
		  		recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(filter.toLowerCase())) ||
		  		recipe.name.toLowerCase().includes(filter.toLowerCase())
				)
	    		) {
				matchesFilter = false;
				break;
	    		}
	  	}
    
	  	if (matchesFilter) {
	    		results.push(recipe);
	  	}
	}
    
	updateFilterSearch(results);
	totalRecipes(results);
	displayAllRecipes(results);
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
};

function updateFilterSearch(results) {

	const oneIngredients = getAvailableItemsByType(results, 'ingredients');
	const oneUstensils = getAvailableItemsByType(results, 'ustensils');
	const oneAppliances = getAvailableItemsByType(results, 'appliance');

	// Mettre à jour le contenu des listes
	updateFilterLists(oneIngredients, oneUstensils, oneAppliances);
};


