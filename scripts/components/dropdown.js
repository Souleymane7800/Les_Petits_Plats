import { ingredientList } from './ingredientsList.js'

document.addEventListener('DOMContentLoaded', function () {
      // Déclaration
      const dropdownIng = document.querySelector('.dropdown-ingredient');
      const dropdownApp = document.querySelector('.dropdown-appareil');
      const dropdownUst = document.querySelector('.dropdown-ustensil');
      const visibleIng = document.querySelector('.dropdown-ingredient-visible');
      const visibleApp = document.querySelector('.dropdown-appareil-visible');
      const visibleUst = document.querySelector('.dropdown-ustensil-visible');
      const dropdownArrowIng = document.querySelector('#dropdownArrowIng');
      const dropdownArrowApp = document.querySelector('#dropdownArrowApp');
      const dropdownArrowUst = document.querySelector('#dropdownArrowUst');
  
      // Listener Arrow
      visibleIng.addEventListener('click', function () {
          dropdownArrowIng.classList.toggle('rotate180');
          dropdownArrowIng.classList.toggle('open'); // à vérifier
      });
  
      visibleApp.addEventListener('click', function () {
          dropdownArrowApp.classList.toggle('rotate180');
          dropdownArrowApp.classList.toggle('open'); // à vérifier
      });
  
      visibleUst.addEventListener('click', function () {
          dropdownArrowUst.classList.toggle('rotate180');
          dropdownArrowUst.classList.toggle('open'); // à vérifier
      });
  
      // Dropdown ingrédients
      const inputIng = document.querySelector('#ingredient-input');
      
      inputIng.addEventListener('input', function () {
            const inputValue = inputIng.value.toLocaleLowerCase();
            const ingredientList = document.querySelector('#ingredient-list');
            const ingredientOptions = ingredientList.querySelectorAll('p');
            ingredientOptions.forEach(option => {
                  const ingredientName = option.textContent.toLocaleLowerCase();
                  const isFind = ingredientName.includes(inputValue);
                  option.style.display = isFind ? 'flex' : 'none';
            });
            console.log(inputValue,inputIng);
      })

      dropdownIng.addEventListener('click', function() {
            // Afficher ou masquer la liste au clic
            ingredientList.style.display = ingredientList.style.display === 'none' ? 'block' : 'none';
      });
});


