const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

const mainPromptAsk = [
    {
        type: 'list',
        name: 'action',
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"]
    }
];

function mainPrompt() {
    inquirer
        .prompt(mainPromptAsk)
        .then((answers) => {
            switch (answers.action) {
                case "View all departments":
                    viewDepts();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a department":
                    // addDept();
                    break;
                case "Add a role":
                    // addRole();
                    break;
                case "Add an employee":
                    // addEmployee();
                    break;
                case "Update an employee role":
                    // updateEmployee();
                    break;
                case "Quit":
                    process.exit();
            }
          });
}

function viewDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log("\n");
        console.log(err);
        console.table(results);
        mainPrompt();
    });
}

function viewRoles() {
    db.query('SELECT role.id, role.title, department.name, role.salary FROM role INNER JOIN department ON department.id = role.department_id ORDER BY role.id ASC', function (err, results) {
        console.log("\n");
        console.log(err);
        console.table(results);
        mainPrompt();
    });
}

function viewEmployees() {
    db.query('SELECT emp.id, emp.first_name, emp.last_name, role.title, department.name AS department, role.salary, concat(man.first_name, " ", man.last_name) AS manager FROM employee emp JOIN role ON emp.role_id = role.id JOIN department ON role.department_id = department.id LEFT JOIN employee man ON man.id = emp.manager_id', function (err, results) {
        console.log("\n");
        console.log(err);
        console.table(results);
        mainPrompt();
    });
}

function init() {
    mainPrompt();
}

init();