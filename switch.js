// for role based access

// create an app with given roles:
// 1. admin : gets full access
// 2. subadmin : gets access to create/delete courses
// 3. test prep : gets access to create/delete tests
// 4. user : gets access to consume content

// switch (key) {
//   case value:
//     break;

//   case value:
//     break;

//   default:
//     break;
// }

var user = "testprep";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;

  case "subadmin":
    console.log("You get access create/delete courses");
    break;

  case "testprep":
    console.log("You get access to create/delete tests");
    break;

  case "user":
    console.log("You gets access to consume content");
    break;

  default:
    console.log("Access Denied");
    break;
}
