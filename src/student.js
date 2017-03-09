// ------------------------------
// Student Constructor & Methods
// ------------------------------

class Student {
  constructor({ firstName, lastName, birthDate } = {}) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
}


// Variable / Func Exports
// -----------------------
module.exports = Student;