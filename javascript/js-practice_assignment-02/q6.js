// Q6: Event-Based Counter Simulation

let count = 0; // shared counter

function increment() {
  count++;
  console.log("Incremented ->", count);
}

function decrement() {
  count--;
  console.log("Decremented ->", count);
}

// Nested function: inner function can access and update the outer function's count
function counterWithNested() {
  let localCount = count; // copy of global count

  function addTen() {
    localCount += 10; // inner function accesses outer variable (closure)
    console.log("Nested function -> localCount:", localCount);
  }

  addTen();
  count = localCount; // sync back to global
  console.log("Global count after nested update:", count);
}

// Simulate "click" events manually
console.log("Initial count:", count);
increment(); // 1
increment(); // 2
decrement(); // 1
counterWithNested(); // 11
decrement(); // 10
