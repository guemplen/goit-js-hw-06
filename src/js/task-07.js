const fontResizer = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontResizer.addEventListener('input', event => {
  const sizeValue = fontResizer.value;
  textSpan.style.fontSize = sizeValue + 'px';
});

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.
