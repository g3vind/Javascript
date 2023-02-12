// // function isEven(input) {
// //   if (input % 2 == 0) console.log("even");
// //   else console.log("odd");
// // }

// // function isEven(el) {
// //   //   if (el % 2 == 0) {
// //   //     return true;
// //   //   }
// //   //   return false;

// //   return el % 2 === 0;
// // }

// var isEven = (element) => {
//   //   if (el % 2 == 0) {
//   //     return true;
//   //   }
//   //   return false;

//   return element % 2 === 0;
// };
// console.log(isEven(8));
// console.log(isEven(7));

// console.log([2, 3, 4, 5].concat([1, 2, 3]));

// var result = [2, 4, 6, 8].every(isEven);
// console.log(result);

// All of the above in one line of code
var result = [2, 10, 12, 14].every((e) => e % 2 === 0);
console.log(result);
