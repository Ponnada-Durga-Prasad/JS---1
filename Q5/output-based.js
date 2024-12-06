// Write a program demonstrating the creation of multiple FECs with a recursive function to calculate factorials.

function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}

console.log(fact(5));
