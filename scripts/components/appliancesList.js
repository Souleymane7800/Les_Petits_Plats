// Recuperer tous les appareils
const allAppliances = recipes.reduce((appliances, recipe) => {
	if (!appliances.includes(recipe.appliance.toLowerCase())) {
		appliances.push(recipe.appliance.toLowerCase());
	}
	return appliances;
}, []);

// Récupérer un appareil
function getOneAppliance(results) {
	const oneAppliances = results.reduce((appliances, recipe) => {
		if (recipe.appliance) {
			const applianceToLowercase = recipe.appliance.toLowerCase();
			if (!appliances.includes(applianceToLowercase)) {
				appliances.push(applianceToLowercase);
			}
		}
		return appliances;
	}, []);
	return oneAppliances;
};

const appliancesList = document.querySelector('#appareil-list');

appliancesList.innerHTML = '';

if (selectedFilter.children.length === 0 && results.length === 0) {

	allAppliances.forEach(appliance => {
		const applianceElement = document.createElement('li');
		applianceElement.textContent = appliance;
		applianceElement.onclick = function () {
			toggleSelectedOption(this.textContent);
		};
		appliancesList.appendChild(applianceElement);
	});
    
} else {
	const oneappliances = getOneAppliance(results);
	oneappliances.forEach(appliance => {
		const applianceElement = document.createElement('li');
		applianceElement.textContent = appliance;
		applianceElement.onclick = function () {
			toggleSelectedOption(this.textContent);
		};
		appliancesList.appendChild(applianceElement);
	});
};
