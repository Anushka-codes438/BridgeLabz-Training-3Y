// Q2: Multi-type data summary
const userName = "Devanshi";            // string
const age = 21;                         // number
const isStudent = true;                 // boolean
const skills = ["JS", "Python", "AWS"]; // array
const profile = { city: "Mathura", year: 3 }; // object
const middleName = null;                // null
let phone;                              // undefined

// typeof gives "object" for arrays and null, so handle them separately
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const entries = [
  ["userName", userName],
  ["age", age],
  ["isStudent", isStudent],
  ["skills", skills],
  ["profile", profile],
  ["middleName", middleName],
  ["phone", phone],
];

// Single console.table call
console.table(
  entries.map(([label, value]) => ({
    label,
    value: JSON.stringify(value) ?? "undefined",
    type: getType(value),
  }))
);
