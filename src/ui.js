// ----------------------
// User Interface Script
// ----------------------

// Imports
// -------
var studentList = require("./list.js").studentList;


// UI Object
// ---------
const UI = {
  createListItem: function(student) {
    // Deconstruct the student object and store property values into corresponding variables.
    let { firstName, lastName, birthDate, id } = student;
    let listItem = UI.createElement({ type: 'li', className: 'student' });
    const htmlList = document.getElementById('students__list');
    // Array of html elements to be appended to the listItem
    const itemContent = [
      UI.createElement({ type: 'span', className: 'student__id', content: id }),
      UI.createElement({ type: 'span', className: 'student__name', content: `${firstName} ${lastName}` }),
      UI.createElement({ type: 'button', className: 'student__delete', content: 'Delete' }),
      UI.createElement({ type: 'span', className: 'student__joined', content: birthDate })
    ];
    // Register event handler for current delete button.
    const deleteButton = itemContent[2];
    deleteButton.addEventListener('click', function(event) {
      // Delete this student object from our studentList set.
      studentList.delete(student);
      // Remove the parent li node.
      htmlList.removeChild(event.target.parentNode);
      UI.assignStudentID();
      UI.populateList();
    });
    // Append children to parent listItem
    for(let elm of itemContent) {
      listItem.appendChild(elm);
    }
    return listItem;
  },
  populateList: function() {
    const htmlList = document.getElementById('students__list');
    htmlList.innerHTML = '';
    for(let student of studentList) {
      htmlList.appendChild(UI.createListItem(student));
    }
  },
  createElement: function({type, className, content} = {}) {
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    if(content) {
      newElement.innerHTML = content;
    }
    return newElement;
  },
  addStudent: function(student) {
    // Add new student object to studentList set, reassign ID's and repopulate the list.
    studentList.add(student);
    UI.assignStudentID();
    UI.populateList();
  },
  assignStudentID: function() {
    let id = 1;
    for(let student of studentList) {
      student.id = id;
      id++;
    }
  }
};


// Variable / Func Exports
// -----------------------
module.exports = {
  UI: UI
};