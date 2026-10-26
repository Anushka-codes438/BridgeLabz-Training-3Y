// Q6: Progressive discount system
const total = 7500;

let discountPercent;
if (total >= 10000) {
  discountPercent = 25;
} else if (total >= 5000) {
  discountPercent = 15;
} else if (total >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const finalPrice = Math.round(total - (total * discountPercent) / 100);

console.log(`Original total: ${total}`);
console.log(`Discount: ${discountPercent}%`);
console.log(`Final price: ${finalPrice}`);
