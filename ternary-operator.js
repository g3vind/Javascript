// show user a sign-out button if he is authenticated
// otherwise show him the option to login/signup

var authenticated = false

// if(authenticated){
// console.log("Show signout button");
// }else{
// console.log("Show login button");}

// Ternary Operator 
// Syntax : condition ? exprIfTrue : exprIfFalse

authenticated ? console.log("Show signout button") : console.log("LOGIN")