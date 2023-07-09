
// Написати функцію, яка приймає один параметр.
// При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд.
// Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28


function createSum() {
    let sum = 0;
  
    return function (num) {
      sum += num;
      return sum;
    };
  }
  
  // Приклад використання
  
  const sum = createSum();
  
  console.log(sum(3)); // 3
  console.log(sum(5)); // 8
  console.log(sum(20)); // 28

function processFirstTask() {









}