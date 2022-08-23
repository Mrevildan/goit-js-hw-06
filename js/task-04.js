// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
  // <button type="button" data-action="decrement">-1</button>
  // <span id="value">0</span>
  // <button type="button" data-action="increment">+1</button>
// </div>

// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementValue= document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementValue = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const clickOnDecrementBtn =  () => {
counterValue -= 1;
valueEl.textContent = counterValue;
return counterValue;
};

const clickIncrementBtn = () => {
counterValue += 1;
valueEl.textContent = counterValue;
return counterValue;
};
  
decrementValue.addEventListener('click', clickOnDecrementBtn);
incrementValue.addEventListener('click', clickIncrementBtn);