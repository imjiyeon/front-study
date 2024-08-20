// 함수

function calculateAvgSalary(employees, position) {
  let total = 0;
  let count = 0;

  for (const employee of employees) {
    if (employee.position === position) {
      total = total + employee.salary;
      count++;
    }
  }

  return total / count;
}

const employees = [
  { name: "짱구", position: "부장", salary: 500 },
  { name: "철수", position: "차장", salary: 380 },
  { name: "훈이", position: "사원", salary: 260 },
  { name: "맹구", position: "차장", salary: 420 },
  { name: "유리", position: "사원", salary: 220 },
];

console.log(calculateAvgSalary(employees, "부장"));
console.log(calculateAvgSalary(employees, "차장"));
console.log(calculateAvgSalary(employees, "사원"));
