const applicantOne = {
    firstName:"Tyrion",
    lastName:"Lannister",
    tvShow: "GOT",
    power:"Drinking and knowledge"
};

const applicantTwo = {
    firstName:"Arya",
    lastName:"Stark",
    tvShow:"GOT",
    power:"100% badass"
};

// initiate array for applicants
let applicants = [];

// push first applicant
applicants.push(applicantOne);

// store array in local storage
const serializeOne = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeOne);

// checking for existing applicants
const jsonString = window.localStorage.getItem('applicants');
// IMPORTANT TO SAVE NEW APPLICANTS WITHOUT OVERRIDING
if(jsonString) {
    applicants = JSON.parse(jsonString);
}

applicants.push(applicantTwo);

const serializeTwo = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeTwo);

// const serializeThree = JSON.stringify('applicants');
// window.localStorage.setItem('applicants', serializeThree);