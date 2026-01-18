const accountId =144566;
let accountEmail = "yash@gmail.com";
var accountPassword = " 1234";
accountCity = "Jaipur";
let accountState;

// accountId = 2; //Not allowed
accountEmail = "hc@hc.com";
accountPassword= "09876";
accountCity ="Goa";

//console.log(accountEmail);
//console.log(accountPassword);
//console.log(accountCity);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,accountCity,accountState]);
