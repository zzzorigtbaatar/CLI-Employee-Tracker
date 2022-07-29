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
                    // viewDepts();
                    break;
                case "View all roles":
                    // viewRoles();
                    break;
                case "View all employees":
                    // viewEmployees();
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

function init() {
    mainPrompt();
}

init();