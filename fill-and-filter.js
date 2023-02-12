var testArray = [2, 3, 4, 5, 6, 7, 8, 89, 9, 0, 0, 0, 86, 5, 5, 0];
// console.log(testArray.fill(1));
/*

OUTPUT : 
[
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1       
]
*/
// console.log(testArray.fill("govind"));
/*
[
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
  "govind",
];
*/
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(testArr.fill("g", 2, 5));

/*
[
  1, 2, 'g', 'g', 'g',
  6, 7, 8,   9
]
*/

// FILTER
const myNumber = [23, 24, 25, 655, 66, 55, 77];
const result = myNumber.filter((num) => num != 55);
console.log(result);

//  [ 23, 24, 25, 655, 66, 77 ]

const result2 = myNumber.filter((num) => num < 30);
console.log(result2);
//  [ 23, 24, 25 ]
