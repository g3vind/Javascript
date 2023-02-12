var users = ["govind", "mohit", "abhilash", "sobhik", "kishan"];
console.log(users.slice(0, 2)); // starting index -  inclusive & ending-index - exclusive
//  [ 'govind', 'mohit' ]

var users = ["govind", "mohit", "abhilash", "sobhik", "kishan"];
console.log(users.slice(1));
//  [ 'mohit', 'abhilash', 'sobhik', 'kishan' ]
console.log(users.slice(5));

// splice
var names = ["g", "a", "m", "s", "k"];
console.log(names.splice(1, 2, "lol"));

const cities = ["patna", "kolkata", "chennai"];
console.log(cities.slice());
// [ 'patna', 'kolkata', 'chennai' ]
console.log(cities.slice(1));
// ["kolkata", "chennai"];
console.log(cities);

const food = ["pizza", "cake", "salad", "cookie"];
//  we want to remove "salad" from the array.
console.log(food.splice(2, 1));
// ["salad"];
console.log(food);
