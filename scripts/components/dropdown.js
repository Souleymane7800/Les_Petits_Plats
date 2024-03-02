
// Déclaration pour le dropdown Ingrédients
const visibleIng = document.querySelector('.dropdown-ingredient-visible');
const dropdownArrowIng = document.querySelector('#dropdownArrowIng');
const inputContainerIng = document.querySelector('.ingredient-input-container');
const inputIng = document.querySelector('#ingredient-input');
const inputResetIng = document.querySelector('#input-reset-ing');
const ingredientsList = document.querySelector('.ingredient-list');

// Fonction pour effacer le input 
function clearInputIng() {
	inputIng.value = '';
	inputIng.dispatchEvent(new Event('input'));
};
  
inputResetIng.addEventListener('click', clearInputIng);

// Fonctions pour le dropdown Ingrédients
function openDropdownIng() {
      
	dropdownArrowIng.classList.add('rotate180');
	inputContainerIng.classList.add('show');
	ingredientsList.classList.add('show');
};
  
function closeDropdownIng() {
	dropdownArrowIng.classList.remove('rotate180');
	inputContainerIng.classList.remove('show');
	ingredientsList.classList.remove('show');
};
  
visibleIng.addEventListener('click', function () {
	if (inputContainerIng.classList.contains('show')) {
		closeDropdownIng();
	} else {
		openDropdownIng();
	}
});
  
inputIng.addEventListener('input', function () {
	const inputValue = inputIng.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	inputResetIng.style.display = inputIng.value ? 'block' : 'none';

	if (ingredientsList) {
		const ingredientOptions = ingredientsList.querySelectorAll('li');
		ingredientOptions.forEach(option => {
			const ingredientName = option.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
			const isFind = ingredientName.includes(inputValue);
			option.style.display = isFind ? 'block' : 'none';
		});
	}
	openDropdownIng();
});
  
// Déclaration pour le dropdown Appareil
const visibleApp = document.querySelector('.dropdown-appareil-visible');
const dropdownArrowApp = document.querySelector('#dropdownArrowApp');
const inputContainerApp = document.querySelector('.appareil-input-container');
const inputApp = document.querySelector('#appareil-input');
const appareilList = document.querySelector('.appareil-list');
const inputResetApp = document.querySelector('#input-reset-app');

function clearInputApp() {
	inputApp.value = '';
	inputApp.dispatchEvent(new Event('input'));
};
  
inputResetApp.addEventListener('click', clearInputApp);
  
// Fonctions pour le dropdown Appareil
function openDropdownApp() {
	dropdownArrowApp.classList.add('rotate180');
	inputContainerApp.classList.add('show');
	appareilList.classList.add('show');
};
  
function closeDropdownApp() {
	dropdownArrowApp.classList.remove('rotate180');
	inputContainerApp.classList.remove('show');
	appareilList.classList.remove('show');
};
  
visibleApp.addEventListener('click', function () {
	if (inputContainerApp.classList.contains('show')) {
		closeDropdownApp();
	} else {
		openDropdownApp();
	}
});
  
inputApp.addEventListener('input', function () {
	const inputValue = inputApp.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
	inputResetApp.style.display = inputApp.value ? 'block' : 'none';

	if (appareilList) {
		const appareilOptions = appareilList.querySelectorAll('li');
		appareilOptions.forEach(option => {
			const appareilName = option.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
			const isFind = appareilName.includes(inputValue);
			option.style.display = isFind ? 'block' : 'none';
		});
	}
	openDropdownApp();
});
  
// Déclaration pour le dropdown Ustensil
const visibleUst = document.querySelector('.dropdown-ustensil-visible');
const dropdownArrowUst = document.querySelector('#dropdownArrowUst');
const inputContainerUst = document.querySelector('.ustensil-input-container');
const inputUst = document.querySelector('#ustensil-input');
const ustensilList = document.querySelector('.ustensil-list');
const inputResetUst = document.querySelector('#input-reset-ust');

function clearInputUst() {
	inputUst.value = '';
	inputUst.dispatchEvent(new Event('input'));
};
  
inputResetUst.addEventListener('click', clearInputUst);

// Fonctions pour le dropdown Ustensil
function openDropdownUst() {
	dropdownArrowUst.classList.add('rotate180');
	inputContainerUst.classList.add('show');
	ustensilList.classList.add('show');
};
  
function closeDropdownUst() {
	dropdownArrowUst.classList.remove('rotate180');
	inputContainerUst.classList.remove('show');
	ustensilList.classList.remove('show');
};
  
visibleUst.addEventListener('click', function () {
	if (inputContainerUst.classList.contains('show')) {
		closeDropdownUst();
	} else {
		openDropdownUst();
	}
});
  
inputUst.addEventListener('input', function () {
	const inputValue = inputUst.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	inputResetUst.style.display = inputUst.value ? 'block' : 'none';

	if (ustensilList) {
		const ustensilOptions = ustensilList.querySelectorAll('li');
		ustensilOptions.forEach(option => {
			const ustensilName = option.textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
			const isFind = ustensilName.includes(inputValue);
			option.style.display = isFind ? 'block' : 'none';
		});
	}
	openDropdownUst();
});

