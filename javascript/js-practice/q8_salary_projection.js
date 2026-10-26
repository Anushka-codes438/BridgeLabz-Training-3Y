// Q8: 5-year salary projection
let salary = 500000;      // current salary
const incrementRate = 8;  // % per year

const projection = [];
for (let year = 1; year <= 5; year++) {
  salary += salary * (incrementRate / 100);          // apply increment
  const rounded = Math.round(salary * 100) / 100;    // 2 decimals
  projection.push({ Year: year, Salary: rounded });
}

console.table(projection);
