
// Déclaration pour le dropdown Ingrédients
const dropdownIng = document.querySelector('.dropdown-ingredient');
const visibleIng = document.querySelector('.dropdown-ingredient-visible');
const dropdownArrowIng = document.querySelector('#dropdownArrowIng');
const inputContainerIng = document.querySelector('.ingredient-input-container');
const inputIng = document.querySelector('#ingredient-input');
// const ingredientList = document.querySelector('.ingredient-list');
  
// Fonctions pour le dropdown Ingrédients
function openDropdownIng() {
      console.log('open');
      dropdownArrowIng.classList.add('rotate180');
      inputContainerIng.classList.add('show');
      ingredientList.classList.add('show');
      console.log('fin open');
}
  
function closeDropdownIng() {
      console.log('close');
      dropdownArrowIng.classList.remove('rotate180');
      inputContainerIng.classList.remove('show');
      ingredientList.classList.remove('show');
      console.log('fin close');
}
  
visibleIng.addEventListener('click', function () {
      console.log('avant if');
      if (inputContainerIng.classList.contains('show')) {
            console.log('dans le if');
            closeDropdownIng();
      } else {
            console.log('on rentre dans else');
            openDropdownIng();
      }
});
  
inputIng.addEventListener('input', function () {
      console.log('inputing');
      const inputValue = inputIng.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
  
      if (ingredientList) {
            const ingredientOptions = ingredientList.querySelectorAll('li');
            ingredientOptions.forEach(option => {
                  const ingredientName = option.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
                  const isFind = ingredientName.includes(inputValue);
                  option.style.display = isFind ? 'flex' : 'none';
            });
      }
      console.log('fin inputing');
      openDropdownIng();
});
  
document.addEventListener('click', function (event) {
      console.log('doc');
      if (!dropdownIng.contains(event.target) && event.target !== visibleIng) {
            closeDropdownIng();
      }
      console.log('fin doc');
});
  
      // Déclaration pour le dropdown Appareil
//       const dropdownApp = document.querySelector('.dropdown-appareil');
//       const visibleApp = document.querySelector('.dropdown-appareil-visible');
//       const dropdownArrowApp = document.querySelector('#dropdownArrowApp');
//       const inputContainerApp = document.querySelector('.appareil-input-container');
//       const inputApp = document.querySelector('#appareil-input');
//       const appareilList = document.querySelector('.appareil-list');
  
//       // Fonctions pour le dropdown Appareil
//       function openDropdownApp() {
//             dropdownArrowApp.classList.add('rotate180');
//             inputContainerApp.classList.add('show');
//             appareilList.classList.add('show');
//       }
  
//       function closeDropdownApp() {
//             dropdownArrowApp.classList.remove('rotate180');
//             inputContainerApp.classList.remove('show');
//             appareilList.classList.remove('show');
//       }
  
//       visibleApp.addEventListener('click', function () {
//             if (inputContainerApp.classList.contains('show')) {
//                   closeDropdownApp();
//             } else {
//                   openDropdownApp();
//             }
//       });
  
//       inputApp.addEventListener('input', function () {
//             const inputValue = inputApp.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
  
//             if (appareilList) {
//                   const appareilOptions = appareilList.querySelectorAll('li');
//                   appareilOptions.forEach(option => {
//                         const appareilName = option.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
//                         const isFind = appareilName.includes(inputValue);
//                         option.style.display = isFind ? 'flex' : 'none';
//                   });
//             }
  
//             openDropdownApp();
//       });
  
//       document.addEventListener('click', function (event) {
//             if (!dropdownApp.contains(event.target) && event.target !== visibleApp) {
//                   closeDropdownApp();
//             }
//       });
  
//       // Déclaration pour le dropdown Ustensil
//       const dropdownUst = document.querySelector('.dropdown-ustensil');
//       const visibleUst = document.querySelector('.dropdown-ustensil-visible');
//       const dropdownArrowUst = document.querySelector('#dropdownArrowUst');
//       const inputContainerUst = document.querySelector('.ustensil-input-container');
//       const inputUst = document.querySelector('#ustensil-input');
//       const ustensilList = document.querySelector('.ustensil-list');
  
//       // Fonctions pour le dropdown Ustensil
//       function openDropdownUst() {
//             dropdownArrowUst.classList.add('rotate180');
//             inputContainerUst.classList.add('show');
//             ustensilList.classList.add('show');
//       }
  
//       function closeDropdownUst() {
//             dropdownArrowUst.classList.remove('rotate180');
//             inputContainerUst.classList.remove('show');
//             ustensilList.classList.remove('show');
//       }
  
//       visibleUst.addEventListener('click', function () {
//             if (inputContainerUst.classList.contains('show')) {
//                   closeDropdownUst();
//             } else {
//                   openDropdownUst();
//             }
//       });
  
//       inputUst.addEventListener('input', function () {
//             const inputValue = inputUst.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
  
//             if (ustensilList) {
//                   const ustensilOptions = ustensilList.querySelectorAll('li');
//                   ustensilOptions.forEach(option => {
//                         const ustensilName = option.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ''); // Normalisation des caractères
//                         const isFind = ustensilName.includes(inputValue);
//                         option.style.display = isFind ? 'flex' : 'none';
//                   });
//             }
  
//             openDropdownUst();
//       });
  
//       document.addEventListener('click', function (event) {
//             if (!dropdownUst.contains(event.target) && event.target !== visibleUst) {
//                   closeDropdownUst();
//             }
//       });
// });
