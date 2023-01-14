sayHello(); // function call before definition but works fine

function sayHello() {
  console.log("Hello!");
}

var myName = "govind";
if (myName === myName) {
  console.log("True Statement!");
}

if (myName === window.myName) {
  console.log("True Statement!");
} // giving error here but works fine in the browser console
