function Employee(ID, fullName, department, level, imageURL,salary) {
  this.ID = ID;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = salaryCalculating(level);

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

    return this.salary.toString();
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

const employee1 = new Employee(
  "1000",
  "Ghazi Samer ",
  "Administration",
  "Senior",
  "#",
  '$'
);
const employee2 = new Employee(
  "1001",
  "Lana Ali    ",
  "Finance",
  "Senior",
  "#",
  '$'
);
const employee3 = new Employee(
  "1002",
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "#",
  '$'
);
const employee4 = new Employee(
  "1003",
  "Safi Walid  ",
  "Administration",
  "Mid-Senior",
  "#",
  '$'
);
const employee5 = new Employee(
  "1004",
  "Omar Zaid   ",
  "Development",
  "Senior",
  "#",
  '$'
);
const employee6 = new Employee(
  "1005",
  "Rana Saleh  ",
  "Development",
  "Junior",
  "#",
  '$'
);
const employee7 = new Employee(
  "1006",
  "Hadi Ahmad  ",
  "Finance",
  "Mid-Senior",
  "#",
  '$'
);

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
  "Employee ID",
  "Full Name",
  "Department",
  "Level",
  "imageURL",
  "Salary",
];

for (let i = 0; i < employees.length; i++) {
  print(employees[i]);
}







// Task two
function addChiled(parent, child) {
  const parent1 = document.getElementsByTagName(parent);
  const child1 = document.createElement(child);
  console.log(parent1);
  parent1[0].appendChild(child1);

  const parentChild = [parent1, child1];

  return parentChild;
}

//create table

let parentChild = addChiled("main", "tabel");
let data = [];

//create table header
parentChild = addChiled("tabel", "th");

// create header data
for (let i = 0; i <= 5; i++) {
  parentChild = addChiled("th", "td");

  data[i] = parentChild[1];
}

// fill data

for (let i = 0; i <= 5; i++) {
  data[i].textContent = headerData[i];
}

// create rows
for (let i = 0; i <= 6; i++) {
  parentChild = addChiled("tabel", "tr");
}

// function to add data to rows
function addRowData(parent) {
  const child = document.createElement("td");
  parent.appendChild(child);
  // console.log(child)
  return child;
}

// set id for row and send every row to addRowData function
const rows = document.getElementsByTagName("tr");
for (let i = 0; i <= 6; i++) {
  rows[i].setAttribute("id", i.toString());
}

let rowData = [];
for (let i = 0; i <= 6; i++) {
  rowData = [];
  let x = document.getElementById(i.toString());
  for (let j = 0; j <= 5; j++) {
    rowData[j] = addRowData(x);
  }
  // console.log(employees[i])

  add(employees[i], rowData);
}

function add(employee, rowData) {
  console.log(employee);
  console.log(rowData);

  for (let i = 0; i <= 5; i++) {
    rowData[i].textContent = Object.values(employee)[i];
  }
}
