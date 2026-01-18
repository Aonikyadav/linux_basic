// * Primitive 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const isLoggedIn =false
const outsideTemp = null
let userMail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber = 23456789987654n;
const score = false

// *Reference Type(Non Primitive)
//Array, Objects, Functions
const heros = ["Sharukh","Salman","Varun","Ajay"];
let myObj = {
    name:"hitesh",
    age: 22,
}

const myFunction =function(){
    console.log("Hello World");
    
}
console.log(typeof outsideTemp);
console.log(typeof myFunction);

console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-Primitive)

let myName = "YashVarshney";
let anotherName = myName;
anotherName = "Varshney ji";
console.log(anotherName);
console.log(myName);
let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne;
userTwo.email = "yash@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);

