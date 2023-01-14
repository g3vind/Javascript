var countries = ["India", "USA", "Japan", "Russia"];
console.log(countries);

var states = new Array("Bihar", "Jharkhand", "UP");
console.log(states);

console.log(states[0]);
console.log(states[1]);
console.log(states[2]);

// no. of elements in array
console.log(states.length); // 3

var user = ["govind", 22, true];
console.log(user);

// pop() : removes value which is at the end of array

// user.pop();
// console.log(user);

// user.pop();
// console.log(user);

// user.pop();
// console.log(user);

// unshift
// user.unshift("NEW VALUE");
// console.log(user);

//shift
// user.shift();
// console.log(user);

//indexof
console.log(user.indexOf(22));

console.log(Array.from("Govind")); // ["G", "o", "v", "i", "n", "d"];
