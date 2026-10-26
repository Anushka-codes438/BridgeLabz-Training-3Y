// Q2: String Manipulation Report

const rawTitle = "  wireless headphones PRO  ";

// Trim spaces, lowercase, split into words, capitalize each word, join back
let cleaned = rawTitle
  .trim()
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Replace the word "Pro" with "Pro Edition" (case-insensitive, whole word only)
cleaned = cleaned.replace(/\bpro\b/i, "Pro Edition");

console.log("Original :", `"${rawTitle}"`);
console.log("Cleaned  :", cleaned);
console.log("Length   :", cleaned.length);
