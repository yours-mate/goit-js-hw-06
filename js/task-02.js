const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector('#ingredients');
console.log(listOfIngredients);
for (const ingredient of ingredients) {
  let product = document.createElement('li');
  product.textContent = ingredient;
  product.classList = 'item';
    listOfIngredients.append(product);

};