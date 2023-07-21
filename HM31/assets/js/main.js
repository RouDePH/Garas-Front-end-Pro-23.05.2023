
const registrationForm = document.getElementById("registration-form");
const tableContainer = document.getElementById("table-container");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    const languagesArray = [];

    languages.forEach(function (language) {
        languagesArray.push(language.value);
    });

    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = firstName;
    row.appendChild(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = lastName;
    row.appendChild(lastNameCell);

    const birthdateCell = document.createElement("td");
    birthdateCell.textContent = birthdate;
    row.appendChild(birthdateCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = gender;
    row.appendChild(genderCell);

    const cityCell = document.createElement("td");
    cityCell.textContent = city;
    row.appendChild(cityCell);

    const addressCell = document.createElement("td");
    addressCell.textContent = address;
    row.appendChild(addressCell);

    const languagesCell = document.createElement("td");
    languagesCell.textContent = languagesArray.join(", ");
    row.appendChild(languagesCell);


    const title = document.createElement("tr");

    title.innerHTML = `
        <th>First name</th>
        <th>Second name</th>
        <th>Birthdate</th>
        <th>Gender</th>
        <th>City</th>
        <th>Address</th>
        <th>Language</th>`;

    const table = document.createElement("table");
    table.appendChild(title);
    table.appendChild(row);

    registrationForm.style.display = "none";
    tableContainer.appendChild(table);
});