// Q3: Math Utility Dashboard

const x = 16.75;

const rounded = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);
// Random integer between 10 and 50 (inclusive)
const randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`
===== Math Dashboard =====
Number        : ${x}
Rounded       : ${rounded}
Square Root   : ${squareRoot.toFixed(4)}
Power (x^3)   : ${power.toFixed(2)}
Random (10-50): ${randomNum}
==========================`);
