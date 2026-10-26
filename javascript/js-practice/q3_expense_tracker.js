// Q3: Monthly expense tracker
const expenses = [
  { category: "food", amount: 6000 },
  { category: "travel", amount: 2500 },
  { category: "rent", amount: 12000 },
  { category: "bills", amount: 3000 },
  { category: "leisure", amount: 1800 },
];

let total = 0;
for (const item of expenses) {
  total += item.amount; // assignment operator
}

const average = total / expenses.length;

let finalAmount = total;
finalAmount += total * 0.10; // add 10% tax

console.log(`Total: ${total.toFixed(2)}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Final amount (after 10% tax): ${finalAmount.toFixed(2)}`);
