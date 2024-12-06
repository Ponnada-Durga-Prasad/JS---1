// function calculateArea(length, width) {
//   return length * width;
// }
// console.log(calculateArea(10, "5")); // Expected: Error-free calculation

function calculateArea(length, width) {
  if (typeof length === Number && typeof width === Number) {
    return length * width;
  } else {
    return Number(length) * Number(width);
  }
}
console.log(calculateArea(10, "5"));
