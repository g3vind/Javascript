// allow user to access course if he is
// logged in from email
// logged in from google
// logged in from facebook

var email = true
var google = false
var facebook = false

// if(email)
// {
// console.log("Access Granted!")
// }
// else
// {
// console.log("Access Denied!")
// }


// if(google)
// {
// console.log("Access Granted!")
// }
// else
// {
// console.log("Access Denied!")
// }

// if(facebook)
// {
// console.log("Access Granted!")
// }
// else
// {
// console.log("Access Denied!")
// }


// If he is logged in from any one he should be logged in
if(email || google || facebook){
console.log("Login Success")}
