// HTML містить порожній список ul#ingredients (<ul id="ingredients"></ul>).

// Масив рядків JS:

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const allElements = ingredients.map(value => {
const element = document.createElement("li");
element.textContent = value; 
element.classList.add("item");
return element;
});

ingredientsEl.append(...allElements);

