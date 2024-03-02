let selectedOptions = [];

function toggleSelectedOption(tagselected) {
	const filterOptionsDiv = document.getElementById('filter-options');
	const index = selectedOptions.indexOf(tagselected);

	if (index === -1) {
		// L'élément n'est pas encore sélectionné on le push
		selectedOptions.push(tagselected);

		// Créer un conteneur pour le cloneTag et la croix
		const tagContainer = document.createElement('div');
		tagContainer.classList.add('tagSelected');

		// cloner et ajouter dans la div "filter-options"
		const cloneTag = document.createElement('span');
		cloneTag.textContent = tagselected;

		// listener pour la suppression au clic sur le cloneTag
		cloneTag.addEventListener('click', function() {
			filterOptionsDiv.removeChild(tagContainer);
			// Retirer l'élément sélectionné correspondant de la liste
			selectedOptions = selectedOptions.filter(item => item !== tagselected);
			filterRecipes(selectedOptions);
		});

		// Close
		const closeIcon = document.createElement('i');
		closeIcon.classList.add('fas', 'fa-times');

		// on relie au container
		tagContainer.appendChild(cloneTag);
		tagContainer.appendChild(closeIcon);

		// Ajouter le conteneur à la div "filter-options"
		filterOptionsDiv.appendChild(tagContainer);
	} else {
		// L'élément est déjà sélectionné, le retirer
		selectedOptions.splice(index, 1);
		// Retirer le cloneTag de la div "filter-options"
		const containerToRemove = filterOptionsDiv.querySelector('div:contains("' + tagselected + '")');
		filterOptionsDiv.removeChild(containerToRemove);
	}
	filterRecipes(selectedOptions);
};
