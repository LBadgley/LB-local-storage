const jsonString = window.localStorage.getItem('applicants');
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}
console.log("hello");

const tbody = document.getElementById('applicants');


for(let i = 0; i < applicants.length; i++) {
    const applicant = applicants[i];
    console.log('applicant', applicant);

    const tr = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = applicant.firstName;
    tr.appendChild(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastName;
    tr.appendChild(lastNameCell);


    // console.log(tr);
    tbody.appendChild(tr);



}

