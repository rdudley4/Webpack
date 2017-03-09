// ------------------------
// Main Application Script
// ------------------------

// Imports
// -------
import "./scss/style.scss";
import Student from "./student";
let studentList = require("./list.js").studentList;
let parseDate = require("./list.js").parseDate;
let UI = require("./ui.js").UI;


// Assign our Students an ID
// -------------------------
UI.assignStudentID();


// Populate List on Page Load
// --------------------------
UI.populateList();


// Add New Student Form
// --------------------
const bdayInput    = document.getElementById('bday_input');
const fnameInput   = document.getElementById('fname_input');
const lnameInput   = document.getElementById('lname_input');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function() {
  let birthDay = bdayInput.value.split("-");
  let [year, month, day] = birthDay;
  let newStudent = new Student({
    firstName: fnameInput.value,
    lastName: lnameInput.value,
    birthDate: parseDate(parseInt(year), parseInt(month), parseInt(day))
  });

  // Check to make sure all information has been entered.
  if (newStudent.firstName === '' || newStudent.lastName === '') {
    // User has not entered a valid first and/or last name.
    return alert('Invalid NAME. Please enter a valid first and last name to continue.');
  } else if(newStudent.birthDate === 'Invalid Date') {
    // User has not entered a valid date.
    return alert('Invalid BIRTHDATE. Please enter a valid date to continue.');
  } else {
    // User has entered valid date for all input fields.
    // Pass newStudent student object to our addStudent method.
    UI.addStudent(newStudent);
    // Reset Input Values
    bdayInput.value = "";
    fnameInput.value = "";
    lnameInput.value = "";
  }
});