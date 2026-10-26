// Q9: Odd-Even Number Analyzer

const numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i); // build array 1-30
}

const results = [];
for (const n of numbers) {
  if (n % 3 === 0 && n % 5 === 0) {
    results.push("FizzBuzz");
  } else if (n % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log("Results array:", results);
numbers.forEach((n, i) => console.log(`${n} -> ${results[i]}`));
