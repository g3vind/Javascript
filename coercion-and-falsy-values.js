// falsy values:

// undefined;
// null;
// 0;
// ("");
// NaN

var user = "null";
if (user) {
  console.log("condn is true"); // it will print
}

var user = null;
if (user) {
  console.log("condn is true"); // it will not print
}

// Loose Check for equality
var user = "2";
if (2 == user) {
  console.log("Print"); // it will print
}

var user = 2;
if (2 == user) {
  console.log("Print"); // it will print
}

// strict check for equality

var user = "2";
if (2 == user) {
  console.log("Print It"); // it will print
}

var user = 2;
if (2 === user) {
  console.log("Print It"); // it will print
}
// Note : === : strict checking
