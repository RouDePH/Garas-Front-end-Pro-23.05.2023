const array = [];
let length = 0;

do {
    length = parseInt(prompt("Введіть довжину масиву:"));
} while (length <= 0 || isNaN(length));

for (let i = 0; i < length; i++) {
  const element = prompt(`Введіть ${i+1} елемент масиву:`);
  array.push(element);
}

array.sort();
array.splice(2, 3);

for (let i = 0; i < array.length; i++) {
  document.write(`${array[i]}<br>`);
}