/*
 execution context : variable object, scope chain, this keyword

two rules:
1. function declarations are scanned and made available e.g. function call before definition

2. variable declarations are scanned and made undefined
*/

function tipper(billAmount) {
  var total = billAmount + 50;
  console.log(total);
}

tipper(1449);
// parseInt : converting number inside text readable

// tipper2("5");
// here it is a variable not a function (rule no 1 and 2)
var tipper2 = function (a) {
  var bill = parseInt(a);
  console.log(bill + 5);
};
tipper2("5");
console.log(name); // undefined

//Hoisting
console.log(name); // undefined
var name = "govind";
console.log(name); // govind

function sayName() {
  var name = "MR H";
  console.log(name);
}
sayName(); // MR H

console.log(name); // govind

// here we can see that for different contexts value of name is different
