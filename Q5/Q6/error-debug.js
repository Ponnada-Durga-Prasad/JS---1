// function createIncrementers() {
//   let result = [];
//   for (var i = 0; i < 3; i++) {
//     result.push(() => i);
//   }
//   return result;
// }
// console.log(createIncrementers()[0]()); // Expected Output: 0

function createIncrementers(i) {
  let result = [];

  return function () {
    result.push(i);
    return result;
  };
}
console.log(createIncrementers(0)());
