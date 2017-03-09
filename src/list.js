// ------------------------------
// List Set & Functions
// ------------------------------

// Imports
// -------

import Student from "./student";

const parseDate = (year = 1917, month = 1, day = 1) => {
  let date = { year, month, day };
  return new Date(date.year, date.month - 1, date.day).toDateString();
};


// Array of Student Objects
// ------------------------

const students = [
  new Student({ 
    firstName: 'Ryan',
    lastName: 'Dudley',
    birthDate: parseDate(1991, 2, 8)
  }),
  new Student({
    firstName: 'Dave',
    lastName: 'Daverson',
    birthDate: parseDate(1982, 7, 22)
  }),
  new Student({
    firstName: 'Bob',
    lastName: 'Bobberson',
    birthDate: parseDate(1965, 4, 13)
  }),
  new Student({
    firstName: 'Sally',
    lastName: 'May',
    birthDate: parseDate(2001, 10, 30) 
  }),
  new Student({
    firstName: 'Regina',
    lastName: 'Something',
    birthDate: parseDate(2006, 12, 25)
  }),
];


// Create Student List (Set)
// -------------------------
const studentList = new Set(students);

  
// Variable / Func Exports
// -----------------------
module.exports = {
  studentList: studentList,
  parseDate: parseDate
};