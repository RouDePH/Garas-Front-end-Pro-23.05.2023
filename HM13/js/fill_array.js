
function fillArray() {
    const mainLength = parseInt(prompt('Введіть довжину основного масиву:'));
    const innerLength = parseInt(prompt('Введіть довжину внутрішніх масивів:'));
  
    const array = [];
  
    for (let i = 0; i < mainLength; i++) {
      const innerArray = [];
  
      for (let j = 0; j < innerLength; j++) {
        const value = prompt(`Введіть значення для елемента [${i}][${j}]:`);
        innerArray.push(value);
      }
  
      array.push(innerArray);
    }
  
    return array;
  }

  const array = fillArray();
  
  console.log(array);