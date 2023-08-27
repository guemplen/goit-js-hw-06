const fontResizer = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

console.log(fontResizer);
fontResizer.addEventListener('input', function () {
  const sizeValue = fontResizer.value;
  textSpan.style.fontSize = sizeValue + 'px';
});

// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн - стиль
// span#text обновляя свойство font - size.В результате при перетаскивании ползунка
// будет меняться размер текста.
