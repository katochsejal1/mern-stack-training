console.log("This is day 15 of JavaScript training!");
console.log(3+5);


//variables are containers that store data values. In JavaScript, we can declare variables using var, let, or const keywords.
//three types of variables in JavaScript: var, let, and const. Each has its own characteristics and use cases:
//var is not used nowdays because it has some issues like it is function-scoped, which can lead to unexpected behavior. It can be redeclared and updated within its scope. It is hoisted to the top of its scope, meaning it can be used before it is declared, but it will be undefined until the declaration is encountered in the code.
// it should be meaningful and descriptive, so that it is easy to understand what the variable represents. For example, instead of using a generic name like "x" or "data", you could use a more specific name like "age" or "userName". This helps improve code readability and maintainability.
var name = "Sejal";
console.log(name);
//reserved keywords must not be same as variable names. For example, you cannot use "var", "let", "const", "if", "else", "for", "while", etc. as variable names, as these are reserved keywords in JavaScript and have special meanings in the language. Using reserved keywords as variable names can lead to syntax errors and unexpected behavior in your code. It is important to choose variable names that are not reserved keywords to ensure that your code runs correctly and is easy to understand.
//var let and const 
//var can be reassigned and redeclared, while let can be reassigned but not redeclared, and const cannot be reassigned or redeclared.
var name = "Rahul";
var name = "Rohit";
name="Sejal";
console.log(name);

//let
//let is not redeclarable, but it is reassignable. It is block-scoped, which means it is only accessible within the block of code where it is declared. It is also hoisted to the top of its block, but it is not initialized until the declaration is encountered in the code.
let city = "Delhi";
city = "Mumbai";
console.log(city);

//const
//const is not redeclarable and not reassignable. It is block-scoped, which means it is only accessible within the block of code where it is declared. It is also hoisted to the top of its block, but it must be initialized at the time of declaration.
const country = "India";
console.log(country);

//functional scope and block scope
//Functional scope means that variables declared within a function are only accessible within that function. They cannot be accessed outside of the function. This is true for variables declared with var, let, and const.
//Block scope means that variables declared within a block (enclosed by curly braces {}) are only accessible within that block. This is true for variables declared with let and const, but not for var, which is function-scoped.
// rules for variable naming in JavaScript:
//1. Variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a number.
//2. Variable names can contain letters, numbers, underscores, and dollar signs, but cannot contain spaces or special characters.
//3. Variable names are case-sensitive, meaning that "myVariable" and "myvariable" are considered different variables.
//4. Variable names should not be reserved keywords in JavaScript, such as "var", "let", "const", "if", "else", etc.
//5. Variable names should be meaningful and descriptive to improve code readability and maintainability.
let firstName = "Sejal";
{
  var x = 10;   // function-scoped
  let y = 20;   // block-scoped
  const z = 30; // block-scoped
  console.log(y); // Works
  console.log("firstname");
}

console.log(x); // Works (var is not block-scoped)
// console.log(y); // Error: y is not defined
// console.log(z);
function myFunction() {
    var a=70;
    console.log(a);
    console.log("firstname");
}
myFunction();


