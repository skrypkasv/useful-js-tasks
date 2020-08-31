// Напиши скрипт который подсчитывает общую
// сумму зарплат работников.

//  Кол - во работников хранится в перемнной
// employees.
//  Зарплата каждого работника это случайное
// число от 500 до 5000
//  Записать сумму в переменную totalSalary
// и вывести в консоль

//  1 сделать переменные
const minSalary = 50;
const maxSalary = 500;
const employees = 7;
let totalSalary = 0;

// 2 перебрать работников в цикле
for (let i = 1; i <= employees; i += 1) {
  // 3 сгенерить случайную зп
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary,
  );

  console.log(`ЗП работника номер ${i} - ${salary} $`);

  // 4  прибавить к тоталу
  totalSalary += salary;
}

// 5 лог
console.log(`totalSalary: ${totalSalary} $`);
