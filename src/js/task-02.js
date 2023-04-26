const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

const ingredientsHTML = ingredients.map((ingredient) => {
  return `<li class="item">${ingredient}</li>`;
}).join("");

ingredientsList.innerHTML = ingredientsHTML;






