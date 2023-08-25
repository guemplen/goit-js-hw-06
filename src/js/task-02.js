const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function addIngredients(ingredientsList) {
  const ingredientsUl = document.getElementById('ingredients');

  ingredientsList.forEach(ingredient => {
    const addIngredient = document.createElement('li');
    addIngredient.className = 'item';
    addIngredient.textContent = ingredient;
    ingredientsUl.append(addIngredient);
  });
}
addIngredients(ingredients);

//Напиши скрипт, который для каждого элемента массива ingredients:
//Создаст отдельный элемент <li>. Обязательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.
