// Q4: Academic performance evaluator
const marks = [78, 85, 92, 67, 88]; // each subject out of 100

let totalMarks = 0;
for (const m of marks) totalMarks += m;

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// validation: any subject < 35 -> detained
const hasFailedSubject = marks.some((m) => m < 35);

let result;
if (hasFailedSubject || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else {
  result = "Promoted"; // 50% - 84.99%
}

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(result);
