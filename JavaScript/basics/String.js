const name ="yash"
const repoCount = 50
console.log(name + repoCount + " Value");
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Yashuu');
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newString =  gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,4);
console.log(anotherString);

const newStringOne = "         Hitesh     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://yash.com/yash%20varshney"
console.log(url.replace('%20','-'));

console.log(url.includes('yash'));
console.log(url.includes('ram'))

console.log(gameName.split(','));

