const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => {
  const product = document.createElement('li');
  product.classList = 'item';
  product.textContent = ingredient;
  return product;
});
console.log(markup);
listOfIngredients.append(...markup);
