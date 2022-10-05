const categoriesEl = document.querySelector('#categories');
const categories = categoriesEl.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(function (category) {
    console.log(`Category:`, category.firstElementChild.textContent);
    console.log(`Elements:`, category.lastElementChild.children.length);
})