/*********************************************************************/
//                       Task 1 : MANGMENT SYSTEM                         //
/*********************************************************************/


// function Employee(ID, fullName, department, level, imageURL,salary) {
//   this.ID = ID;
//   this.fullName = fullName;
//   this.department = department;
//   this.level = level;
//   this.imageURL = imageURL;
//   this.salary = salaryCalculating(level);

function Employee(arrOfEmployee) {
  let ID, fullName, department, level, imageURL, salary;
  this.ID = arrOfEmployee[0];
  this.fullName = arrOfEmployee[1];
  this.department = arrOfEmployee[2];
  this.level = arrOfEmployee[3];
  this.imageURL = arrOfEmployee[4];
  this.salary = salaryCalculating(this.level);

  function salaryCalculating(level) {
    switch (level) {
      case "Junior":
        this.salary = Math.floor(Math.random() * (1000 - 500)) + 500;
        break;
      case "Mid-Senior":
        this.salary = Math.floor(Math.random() * (1500 - 1000)) + 1000;
        break;
      case "Senior":
        this.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
        break;
    }

    return this.salary;
  }
}

function print(employee) {
  console.log(
    "Employee Name :" +
      employee.fullName +
      "           Salary :" +
      employee.salary +
      "$"
  );
}

function CtreateRow() {}

const employee1 = new Employee([
  "1000",
  "Ghazi Samer ",
  "Administration",
  "Senior",
  "#",
  "$",
]);
const employee2 = new Employee([
  "1001",
  "Lana Ali    ",
  "Finance",
  "Senior",
  "#",
  "$",
]);
const employee3 = new Employee([
  "1002",
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "#",
  "$",
]);
const employee4 = new Employee([
  "1003",
  "Safi Walid  ",
  "Administration",
  "Mid-Senior",
  "#",
  "$",
]);
const employee5 = new Employee([
  "1004",
  "Omar Zaid   ",
  "Development",
  "Senior",
  "#",
  "$",
]);
const employee6 = new Employee([
  "1005",
  "Rana Saleh  ",
  "Development",
  "Junior",
  "#",
  "$",
]);
const employee7 = new Employee([
  "1006",
  "Hadi Ahmad  ",
  "Finance",
  "Mid-Senior",
  "#",
  "$",
]);

const employees = [
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7,
];
const headerData = [
  "ID",
  "Full Name",
  "Department",
  "Level",
  "imageURL",
  "Salary",
];

for (let i = 0; i < employees.length; i++) {
  print(employees[i]);
}








/*********************************************************************/
//                       Task 2 : CONSTRACTAR                         //
/*********************************************************************/



function addChiled(parent, child) {
  const parent1 = document.getElementsByTagName(parent);
  const child1 = document.createElement(child);
  console.log(parent1);
  parent1[0].appendChild(child1);

  const parentChild = [parent1, child1];

  return parentChild;
}

// //create table

// let parentChild = addChiled("main", "tabel");
// let data = [];

// //create table header
// parentChild = addChiled("tabel", "th");

// // create header data
// for (let i = 0; i <= 5; i++) {
//   parentChild = addChiled("th", "td");

//   data[i] = parentChild[1];
// }

// // fill data

// for (let i = 0; i <= 5; i++) {
//   data[i].textContent = headerData[i];
// }

// // create rows
// for (let i = 0; i <= 6; i++) {
//   parentChild = addChiled("tabel", "tr");
// }

// // function to add data to rows
// function addRowData(parent) {
//   const child = document.createElement("td");
//   parent.appendChild(child);
//   // console.log(child)
//   return child;
// }

// // set id for row and send every row to addRowData function
// const rows = document.getElementsByTagName("tr");
// for (let i = 0; i <= 6; i++) {
//   rows[i].setAttribute("id", i.toString());
// }

// let rowData = [];
// for (let i = 0; i <= 6; i++) {
//   rowData = [];
//   let x = document.getElementById(i.toString());
//   for (let j = 0; j <= 5; j++) {
//     rowData[j] = addRowData(x);
//   }
//   // console.log(employees[i])

//   add(employees[i], rowData);
// }

// function add(employee, rowData) {
//   console.log(employee);
//   console.log(rowData);

//   for (let i = 0; i <= 5; i++) {
//     rowData[i].textContent = Object.values(employee)[i];
//   }
// }







/*********************************************************************/
//                       Task 3 : DOM                                //
/*********************************************************************/

// TO LOAD CARD WHICH STORE IN LOCALSTORGE

for (let i = 0; localStorage.getItem(localStorage.key(i)) != null; i++) {
  card(localStorage.key(i));
}

// ADD focusout EVENT IN FORM TO READ DATA 
const form = document.querySelector("form");
form.addEventListener("focusout", readData);



// READ INPUT DATA
let inputData = [];
function readData(event) {
  event.preventDefault();
  for (i = 0; i < headerData.length; i++) {
    inputData[i] = document.getElementById(headerData[i]).value;
  }
}



// ADD submit EVENT TO STORE DATA IN LOCALSTORAGE
let keys = 100;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  localStorage.setItem(
    keys.toString(),
    JSON.stringify(new Employee(inputData))
  );
  card((keys++).toString());
});



// CREATE CARD FOR EVERY SUBMITTED INPUT
function card(storageKey) {
  const emp = JSON.parse(localStorage.getItem(storageKey));
  let x = addChiled("main", "div");
  x[1].setAttribute("class", "card");
  let image = document.createElement("img");
  x[1].append(image);
  image.setAttribute("src", emp.imageURL);
  image.setAttribute("alt", "card");
  let p = document.createElement("p");
  x[1].append(p);
  p.textContent =
    emp.fullName +
    " " +
    emp.ID +
    " " +
    emp.department +
    "  " +
    emp.level +
    "  " +
    emp.salary +
    "$ ";
}
