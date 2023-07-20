const array = [1, [1.1, 1.2, 1.3, 1.4, [4.1, 4.2], 1.5], 2, 3, 4, 5, 6, 7, [7.1, 7.2, [2.1, 2.2], 7.3, 7.4, 7.5], 8, 9, 10];

function generateList(arr) {
    const arrayNode = document.createElement('ul');

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            const numberNode = document.createElement("li");
            numberNode.innerText = arr[i];
            arrayNode.appendChild(numberNode);
        } else if (typeof arr[i] == "object") {
            const listNode = generateList(arr[i]);
            arrayNode.appendChild(listNode);
        }
    }

    return arrayNode;
}

const root = document.getElementById("root");
const list = generateList(array);

root.appendChild(list);