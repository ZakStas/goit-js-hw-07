const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredient = document.querySelector('#ingredients')
const recipe = createProductsList('ingredients')

console.log(recipe);
ingredient.appendChild(recipe);

function createProductsList() {
  const products = document.createElement('ul')
  products.classList.add('ingredients')

  const potato = document.createElement('li')
  potato.classList.add('Картошка')

  const mushrooms = document.createElement('li')
  mushrooms.classList.add('Грибы')

  const garlic = document.createElement('li')
  garlic.classList.add('Чеснок')

  const tomatos = document.createElement('li')
  tomatos.classList.add('Помидоры')

  const green = document.createElement('li')
  green.classList.add('Зелень')

  const seasoning = document.createElement('li')
  seasoning.classList.add('Приправы')

  products.append(mushrooms, potato, garlic, tomatos, green, seasoning)

  return products; 
};