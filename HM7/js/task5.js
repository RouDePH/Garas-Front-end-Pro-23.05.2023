
//Знайти добуток усіх цілих чисел від 15 до 35

let sum = 0;

for (let i = 15; i < 35; i++) {
    sum += Math.pow(i, 2);
}

document.write(sum);