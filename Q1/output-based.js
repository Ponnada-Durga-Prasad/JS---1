// Write a program that accepts inputs of various types (e.g., number, string) and converts them into numbers before calculating their sum.

// Input: ["10", 20, "30"]

function sum(arr) {
  arr = arr.map(Number);
  return arr.reduce((acc, ele) => ele + d, 0);
}

console.log(sum(["10", 20, "30"]));
