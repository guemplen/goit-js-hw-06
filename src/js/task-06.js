const validationInput = document.getElementById('validation-input');
const inputDatalength = parseInt(validationInput.getAttribute('data-length'));

validationInput.addEventListener('blur', event => {
  const valueInput = validationInput.value;
  const lengthInput = valueInput.length;

  if (lengthInput === inputDatalength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили
//в исходные файлы задания.
