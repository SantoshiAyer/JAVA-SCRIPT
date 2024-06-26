const accountId = 1234;
let accountEmail = "abc@12gmail.com";
var accountPassword = "124";
let accountCity = "mnr"; // Declaare the variable
let accountState;

// accountId = 2 // not allowed, this line is commented out because it's not allowed
//var is not prefer to use because of issue in block scope and functional scope


accountEmail = "sdf12@gmail.com";
accountPassword = "567";
accountCity = "bhasi";

console.log(accountId);
// console.table({
//     accountEmail: accountEmail,
//     accountPassword: accountPassword,
//     accountCity: accountCity
// });
console.table([accountEmail,accountPassword,accountCity,accountState]);