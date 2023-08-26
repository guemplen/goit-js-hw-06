// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const listenerBtn = document.querySelectorAll('button[data-action]');
const valueSpan = document.getElementById('value');

let counterValue = 0;
listenerBtn.forEach(button => {
  button.addEventListener('click', () => {
    const active = button.dataset.action;
    if (active === 'increment') {
      counterValue += 1;
    } else if (active === 'decrement') {
      counterValue -= 1;
    }
    valueSpan.textContent = counterValue;
    //   console.log(counterValue);
  });
});
