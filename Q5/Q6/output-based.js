// Create a closure-based counter with methods to increment, decrement, and reset the counter.

// Expected Output:

// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.reset(); // 0

let counter = {
  count: 0,
  increament: function () {
    return this.count + 1;
  },
  decrement: function () {
    return this.count - 1;
  },
  reset: function () {
    return (this.count = 0);
  },
};

console.log(counter.increament());
console.log(counter.decrement());
console.log(counter.reset());
