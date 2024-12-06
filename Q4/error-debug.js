// const obj = {
//   name: "JavaScript",
//   getName: () => this.name,
// };
// console.log(obj.getName()); // Expected Output: "JavaScript"

const obj = {
  name: "JavaScript",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName());
