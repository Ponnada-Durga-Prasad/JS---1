** Question 1 **

# debug question

`function calculateArea(length, width) {
  if (typeof length === Number && typeof width === Number) {
    return length * width;
  } else {
    return Number(length) * Number(width);
  }
}
console.log(calculateArea(10, "5"));`

# outbased question

`function sum(arr) {
arr = arr.map(Number);
return arr.reduce((acc, ele) => ele + d, 0);
}

console.log(sum(["10", 20, "30"]));`

# topic based question

`static tying refers to the mentioning the type of variables while writing programs, this avoid variable type error and type coercion errors.
dynamic typing refers to the programming languge will implicitly assign the type to variable based on value assigned to it. here,
dyanmic typing leads typing errors, but it also leads to simplicitly without caring about types

dynamic typing : let a = 10;

static typing : let name : string = "Durga Prasad";`

** Question 2 **

# debug question

`let a = "10";
let b = "5";
console.log(Number(a) + Number(b));`

# outbased question

`function conc(arr) {
return arr.reduce((acc, ele) => {
if (typeof ele !== "string") {
return acc + String(ele);
} else {
return acc + ele;
}
}, "");
}

console.log(conc(["Hello", 42, true]));`

# topic based question

`== (loose equality) this is a comparison operator used to check whether both values are equal or not without checking type.

=== (strict equality) this is comparison operator which checks whether two values are equal or not after performing type coercion.
implicitly by js engine

if( 5 == "5") // true,

if(5 === "5") // false`

** Question 3 **

# debug question

`const multiply = (a, b) => a * b;
console.log(multiply(2, 3));`

# outbased question

`function double(arr) {
arr.map((ele) => {
return ele \* 2;
});
}
let output = double([1, 2, 3]);

console.log(output);`

# topic based question

`function expressions are a way of writing functions by assigning it to the varaible and calling the function by that function name,
this function also called anonymous function. in F.E scopes are normally working like block scope, function scope for var, let, const,
F.E has their own this keyword unlike arrow, this in F.E represents window obj

Arrow Functions are also one of the way of writing functions introuduced in es6, the difference between F.E and arrow functions is arrow functiosn don't have their own this keyword.
so it uses its parents this keyword like window object.`

** Question 4 **

# debug question

`const obj = {
  name: "JavaScript",
  getName: function () {
    return this.name;
  },
};
console.log(obj.getName());`

# outbased question

`let obj = {
  firstName: "Durga Prasad",
  lastName: "Ponnada",
  getFullName: function () {
    return `${this.firstName} \_\_\_ ${this.lastName}`;
},
};

let ano = {
firstName: "Shiva",
lastName: "Universe",
};

let res = obj.getFullName.bind(ano);
console.log(res);`

# topic based question

`regular functions are hoisted unlike function expressions and arrow functions and also normal functions have their own this. syntax is somewhat is large compared to arrow functions.

arrow functions are similar to functions in very easy form, this are used for writing functiosn but with easy syntax and takign smaller decisions. aroow functiosn don't have theri own,
this keyword.`

** Question 5 **

# debug question

`var name = "JavaScript";
console.log(name);`

# outbased question

`function fact(n) {
if (n === 1) return 1;
return n \* fact(n - 1);
}

console.log(fact(5));`

# topic based question

`this actually represents parent object or any parent , if we use this in global scope i think it will point to window object
because window object is the parent of everything.`

** Question 6 **

# debug question

`function createIncrementers(i) {
let result = [];

return function () {
result.push(i);
return result;
};
}
console.log(createIncrementers(0)());`

# outbased question

`let counter = {
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
console.log(counter.reset());`

# topic based question

`Encapsulation means hiding implementation and unncessary details, and showing what it actually performs,

closures also hides the implementation of the functions which are returned by closures, because we can't directly
call them using their name.`
