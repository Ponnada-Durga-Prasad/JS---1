// Implement a method in an object that uses bind to ensure this always refers to the object, even when the method is passed as a callback.

let obj = {
  firstName: "Durga Prasad",
  lastName: "Ponnada",
  getFullName: function () {
    return `${this.firstName} ___ ${this.lastName}`;
  },
};

let ano = {
  firstName: "Shiva",
  lastName: "Universe",
};

let res = obj.getFullName.bind(ano);
console.log(res);
