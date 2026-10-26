// Q1: Scope Conflict Resolver

// Global variable: visible everywhere
var bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variable: exists only inside this function
  let salary = 40000;

  // Add the global bonus only for permanent employees
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${salary}`);
}

calculateSalary(true);   // 45000
calculateSalary(false);  // 40000

// Demonstrating scope: changing isPermanent never changes the global bonus
console.log("Global bonus after calls:", bonus);                 // still 5000
console.log("salary visible outside?", typeof salary);           // "undefined" (local only)
console.log("isPermanent visible outside?", typeof isPermanent); // "undefined" (local only)
