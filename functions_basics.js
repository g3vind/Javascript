// addition func
function addition(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

addition(2, 3);

function sayHello() {
  console.log("Hello!");
}

sayHello();
sayHello();

function sayHello(name) {
  console.log("Hello!" + name);
}

sayHello(" Govind");

function sayHi(name) {
  console.log(`Hi there!,${name} How are you?`);
}
sayHi("Sobhik");

// return in functions
function namastey() {
  return "WELCOME TO INDIA";
}

namastey();
var greetings = namastey();
console.log(greetings);

console.log(namastey());
