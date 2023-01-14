// define a func that can answer the role of a user
// a user can have these roles:

// create an app with given roles:
// 1. admin : gets full access
// 2. subadmin : gets access to create/delete courses
// 3. test prep : gets access to create/delete tests
// 4. user : gets access to consume content
// 5. other: trial user

// Input : getUserRole(name, role)
/*

function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is the admin with all access`;
      break; // not necessary when return is given i.e. unreachable code
    case "subadmin":
      return `${name} is the subadmin with access to create/delete courses`;
    case "testprep":
      return `${name} is a testprep with access to create/delete tests`;
    case "user":
      return `${name} is a user with access to consume content`;
    default:
      return `${name} is just a trial user`;
  }
}

console.log(getUserRole("Govind", "admin"));
console.log(getUserRole("Sobhik", "subadmin"));
console.log(getUserRole("Mohit", "testprep"));
console.log(getUserRole("Kishan", "user"));
console.log(getUserRole("Abhilash", "lol"));

var getRole = getUserRole("Abhilaasha", "subadmin");
console.log(getRole);

getRole = getUserRole("Richa", "testprep");
console.log(getRole);

*/

// Storing function inside a variable
var getUserRole = function getUserRole(name, role) {
  switch (role) {
    case "admin":
      return `${name} is the admin with all access`;
      break; // not necessary when return is given i.e. unreachable code
    case "subadmin":
      return `${name} is the subadmin with access to create/delete courses`;
    case "testprep":
      return `${name} is a testprep with access to create/delete tests`;
    case "user":
      return `${name} is a user with access to consume content`;
    default:
      return `${name} is just a trial user`;
  }
};

var getRole = getUserRole("Abhilaasha", "subadmin");
console.log(getRole);

getRole = getUserRole("Richa", "testprep");
console.log(getRole);
