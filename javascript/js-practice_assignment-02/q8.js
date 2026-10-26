// Q8: Dynamic Discount Evaluator

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Original cart value (before any discount)
const originalTotal = cart.reduce((sum, p) => sum + p.price, 0);

// Apply category discounts using a loop + conditionals
const discountedItems = [];
for (const product of cart) {
  let discountRate = 0;
  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }
  const finalPrice = product.price - product.price * discountRate;
  discountedItems.push({ ...product, discountRate, finalPrice });
  console.log(`${product.item}: ${product.price} -> ${finalPrice} (${discountRate * 100}% off)`);
}

// Sum of discounted prices using reduce()
let finalTotal = discountedItems.reduce((sum, p) => sum + p.finalPrice, 0);

// Extra 5% overall discount if original cart value > 50000
if (originalTotal > 50000) {
  finalTotal *= 0.95;
  console.log("Extra 5% overall discount applied!");
} else {
  console.log("No extra overall discount (cart value not above 50000).");
}

console.log("Original total:", originalTotal);
console.log("Final total   :", finalTotal);
