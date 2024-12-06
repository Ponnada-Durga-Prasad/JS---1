// Create a higher-order function that takes a callback (anonymous or arrow function) and applies it to double each value in an array.

// Input: [1, 2, 3]

// Expected Output: [2, 4, 6]

function double(arr) {
  arr.map((ele) => {
    return ele * 2;
  });
}
let output = double([1, 2, 3]);

console.log(output);
