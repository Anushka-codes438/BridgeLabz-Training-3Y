
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        // Accept coupon formats such as SAVE20 or DISC10
        const couponRegex = /^(SAVE|DISC)(\d{1,2})$/;
        const match = coupon.match(couponRegex);

        if (!match) {
            console.log("Invalid coupon format.");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 99) {
            console.log("Discount must be between 1% and 99%.");
            return this.getTotal();
        }

        const originalTotal = this.getTotal();
        const discount = originalTotal * discountPercent / 100;
        const finalTotal = originalTotal - discount;

        console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
        console.log(`Coupon Applied: ${coupon}`);
        console.log(`Discount: ${discountPercent}%`);
        console.log(`Discount Amount: ₹${discount.toFixed(2)}`);
        console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);

        return finalTotal;
    }
}

// Create shopping cart
const cart = new Cart();

// Add items
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 2000, 1);

console.log("Cart Items:");
cart.items.forEach(item => {
    console.log(
        `${item.name}: ₹${item.price} x ${item.quantity}`
    );
});

console.log("\nTotal before discount: ₹" + cart.getTotal());

// Apply coupon
cart.applyCoupon("SAVE20");
