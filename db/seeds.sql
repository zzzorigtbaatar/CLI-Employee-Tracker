INSERT INTO department (name)
VALUES ("Office"),
       ("Sales"),
       ("Marketing"),
       ("Research & Development");
       

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 250000, 1),
       ("Director", 150000, 2),
       ("Designer", 80000, 3),
       ("Senior Engineer", 12000, 4),
       ("Junior Engineer", 70000, 4),
       ("Secretary", 65000, 1),
       ("Accountant", 80000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Monkey", "Luffy", 1, null),
       ("Guts", "Berserk", 2, 1),
       ("Naruto", "Uzumaki", 3, 2),
       ("Edward", "Elric", 4, 2),
       ("Alphonse", "Elric", 5, 4),
       ("Robin", "Nico", 6, 2),
       ("Eugene", "Krabs", 7, 2);