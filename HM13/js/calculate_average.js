
function calculateArray(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        } else if (typeof arr[i] === 'object') {
            let result = calculateArray(arr[i]);
            if (result.sum === 0) {
                continue;
            } else {
                sum += result.sum;
                count += result.count;
            }
        }
    }

    if (count === 0) {
        return { sum: 0, count: 0 };
    }

    return { sum: sum, count: count };
}

function calculateAverage(arr) {
    const result = calculateArray(arr);
    return result.sum / result.count;
}

const array = [1, "string1", 2, "string1", [3, 4, "string3"], "string4", [5, 6], [7], 8];

const result = calculateAverage(array);

console.log(result.toFixed(2));