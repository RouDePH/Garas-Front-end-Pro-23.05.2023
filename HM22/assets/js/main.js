
function getRoot() {
    return document.getElementById('root');
}

function createTable(x, y) {
    const table = document.createElement("table");
    let counter = 1;

    for (let i = 0; i < x; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < y; j++) {
            const td = document.createElement("td");
            td.textContent = counter;
            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
    }
    return table;
}

const root = getRoot();
const table = createTable(10, 10);
root.appendChild(table);