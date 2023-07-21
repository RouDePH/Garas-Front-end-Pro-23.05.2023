
const registrationForm = document.getElementById("registration-form");
const tableContainer = document.getElementById("table-container");

registrationForm.addEventListener("submit", function (e) {

    e.preventDefault();
    const data = new FormData(e.target);
    const dataArray = [...data.entries()];

    const mergedObject = {};
    dataArray.forEach(([key, value]) => {
    if (mergedObject[key]) {
        mergedObject[key].push(value);
    } else {
        mergedObject[key] = [value];
    }
    });

    const mergedDataArray = Object.entries(mergedObject);
    console.log(mergedDataArray);

    tableContainer.style.display = 'block';
    registrationForm.style.display = 'none';

    const dataTableBody = document.getElementById('dataTableBody');
    const row = document.createElement("tr");

    mergedDataArray.forEach(item => {
      const itemNode = document.createElement("td");
      const [key, value] = item;
      itemNode.innerText = value;
      row.appendChild(itemNode);
    });

    dataTableBody.appendChild(row);

});