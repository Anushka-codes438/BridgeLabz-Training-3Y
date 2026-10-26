// Q4: Array Performance Analyzer

// Create 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;

// Students who passed (>= 50)
const passed = scores.filter(s => s >= 50);

// map() used to build a Pass/Fail label for each score
const report = scores.map((s, i) => `Student ${i + 1}: ${s} (${s >= 50 ? "Pass" : "Fail"})`);

console.log("===== Performance Summary =====");
report.forEach(line => console.log(line));
console.log("-------------------------------");
console.log(`Scores   : [${scores.join(", ")}]`);
console.log(`Highest  : ${highest}`);
console.log(`Lowest   : ${lowest}`);
console.log(`Average  : ${average.toFixed(2)}`);
console.log(`Passed   : ${passed.length} / ${scores.length}`);
