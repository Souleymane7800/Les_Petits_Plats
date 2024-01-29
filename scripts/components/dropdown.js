// import { ingredientList } from './ingredientsList.js'

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
      // Input container test
      const inputContainer = document.querySelector('.ingredient-input-container')
      // inputContainer.style.display = 'none'; // a revoir 😡
      console.log('ligne17 dropdaown');
  
      // Listener Arrow rotate
      visibleIng.addEventListener('click', function () {
          dropdownArrowIng.classList.toggle('rotate180')
          //dropdownIng.classList.toggle('show'); // à vérifier
          inputContainer.style.display = (inputContainer.style.display === 'none') ? 'flex' : 'none';
      });

      console.log('ligne25 dropdaown');
      visibleApp.addEventListener('click', function () {
          dropdownArrowApp.classList.toggle('rotate180');
          //dropdownApp.classList.toggle('show'); // à vérifier
          inputContainer.style.display = (inputContainer.style.display === 'none') ? 'flex' : 'none';
      });
      
      console.log('ligne30 dropdaown');
      visibleUst.addEventListener('click', function () {
          dropdownArrowUst.classList.toggle('rotate180');
          //dropdownUst.classList.toggle('show'); // à vérifier
          inputContainer.style.display = (inputContainer.style.display === 'none') ? 'flex' : 'none';
      });

  
      // Dropdown ingrédients
      const inputIng = document.querySelector('#ingredient-input');
      console.log('ligne 37');
      inputIng.addEventListener('input', function () {
            const inputValue = inputIng.value.toLowerCase();
            const ingredientList = document.querySelector('#ingredient-list');
            const ingredientOptions = ingredientList.querySelectorAll('li');
            ingredientOptions.forEach(option => {
                  const ingredientName = option.textContent.toLowerCase();
                  const isFind = ingredientName.includes(inputValue);
                  option.style.display = isFind ? 'flex' : 'none';
            });
            // console.log(ingredientOptions);
            console.log(inputValue,inputIng);
      })

      //inputIng.appendChild(ingredientList); //test
      dropdownIng.addEventListener('click', function() {
            // Afficher ou masquer la liste au clic
            ingredientList.style.display = (ingredientList.style.display === 'none') ? 'block' : 'none';
            // inputContainer.style.display = inputContainer.style.display === 'none' ? 'flex' : 'none';
      });

      //ingredientList.style.display = 'none'; // a revoir 😡
      // inputContainer.style.display = 'none'; // a revoir 😡
          // Gestion de la recherche dans la liste d'appareils
      const inputApp = document.querySelector('#appareil-input');
      inputApp.addEventListener('input', function () {
            const inputValue = inputApp.value.toLowerCase();
            const appareilList = document.querySelector('#appareil-list');
            const appareilOptions = appareilList.querySelectorAll('li');
            appareilOptions.forEach(option => {
                  const appareilName = option.textContent.toLowerCase();
                  const isFind = appareilName.includes(inputValue);
                  option.style.display = isFind ? 'flex' : 'none';
            });
      });

      dropdownApp.addEventListener('click', function() {
            // Afficher ou masquer la liste au clic
            appliancesList.style.display = appliancesList.style.display === 'none' ? 'block' : 'none';
            // inputContainer.style.display = inputContainer.style.display === 'none' ? 'flex' : 'none';
      });

      // Dropdown ustensils
      const inputUst = document.querySelector('#ustensil-input');
      console.log('ustensil',inputUst);
      inputUst.addEventListener('input', function () {
            const inputValue = inputUst.value.toLowerCase();
            const ustensilList = document.querySelector('#ustensil-list');
            const ustensilOptions = ustensilList.querySelectorAll('li');
            ustensilOptions.forEach(option => {
                  const ustensilName = option.textContent.toLowerCase();
                  const isFind = ustensilName.includes(inputValue);
                  option.style.display = isFind ? 'flex' : 'none';
            })
            console.log('ustensil', inputValue,inputUst,ustensilList);
      })

      dropdownUst.addEventListener('click', function() {
            // Afficher ou masquer la liste au clic
            ustensilsList.style.display = 'block'; // a verifier
            // inputContainer.style.display = inputContainer.style.display === 'none' ? 'flex' : 'none';
      });

});


