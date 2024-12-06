// Write a function that performs strict string concatenation without unintended coercion.

// Input: ["Hello", 42, true]

// Expected Output: "Hello42true"

function conc(arr) {
  return arr.reduce((acc, ele) => {
    if (typeof ele !== "string") {
      return acc + String(ele);
    } else {
      return acc + ele;
    }
  }, "");
}

console.log(conc(["Hello", 42, true]));
