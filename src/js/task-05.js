const textInput = document.getElementById('name-input');
const spanText = document.getElementById('name-output');

textInput.addEventListener('input', function () {
  const newText = textInput.value;
  spanText.textContent = newText;
  if (textInput.value === '') {
    spanText.textContent = 'Anonymous';
  }
});

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".
