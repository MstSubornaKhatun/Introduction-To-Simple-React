/*
variable

let and const 


let name = "SUBORNA";
name = "SUBORNA KHATUN"


const countryName = "BD";

if else

const num = 40;

// && and ||
if(num>20 && num<=30){
    console.log("YES")
}
else {
    console.log("NO")
}

const friends = ["HERO", "JABBAR", "RATUN", "RAHIM"];

console.log(friends) // (4) ['HERO', 'JABBAR', 'RATUN', 'RAHIM']
console.log(friends[1]) // JABBAR


// end
friends.push("RAKA")
console.log(friends) // (5) ['HERO', 'JABBAR', 'RATUN', 'RAHIM', 'RAKA']

friends.pop()
console.log(friends) // (4) ['HERO', 'JABBAR', 'RATUN', 'RAHIM']


// start
friends.unshift("FAHA")
console.log(friends) // (5) ['FAHA', 'HERO', 'JABBAR', 'RATUN', 'RAHIM']

friends.shift()
console.log(friends) // (4) ['HERO', 'JABBAR', 'RATUN', 'RAHIM']


console.log(friends.slice(2,4)) // (2) ['RATUN', 'RAHIM']
console.log(friends.splice(2,3)) // (2) ['RATUN', 'RAHIM']



*/

/*

const friends = ["HERO", "JABBAR", "RATUN", "RAHIM"];


for (let index = 0; index < friends.length; index++) {
    const element = friends[index];
    console.log(element)
}

output: 
HERO
JABBAR
RATUN
RAHIM



*/

/*
function sum (a, b){
    const result = a + b;
    console.log(result)
}
sum() // NaN

const output = sum(4, 5);
console.log(output) // undefined

*/


/*

function sum (a, b){
    // console.log(arguments) // Arguments(2) [4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(...arguments) // 4 5
    const result = a + b;
    return result;
}

const output = sum(4, 5);
console.log(output) // 9

const friends = ["PREMA", "HANNA", "RAHA", "SANA"];
console.log(friends)

const person = {
    name: "SUBORNA",
    age: 10,
    friends: friends
}
console.log(person) // {name: 'SUBORNA', age: 10, friends: Array(4)}
console.log(person.friends[1]) // HANNA

person.name = "SABANA";
console.log(person) // {name: 'SABANA', age: 10, friends: Array(4)}

*/


// 2

/*
const fName = "SUBORNA";
const lName = "KHATUN";

console.log(`I am MST. ${fName} ${lName}`) // I am MST. SUBORNA KHATUN

function sum(){
    console.log(arguments) // ata arrow function er modhe hoi na
}


const sum = (...rest) => {
    console.log(rest) // (3) [1, 2, 3]
}

sum(1,2,3) 



*/

// const sum = (a, b, c) => a + b + c; // single line


// multi line
const sum = (a, b, c) => {
    const add = a + b + c; 
    return add;
}

const result = sum(1,2,3)
console.log(result) // 6

const numbers = [1,2,3,4,5,6];
// console.log(numbers); // (6) [1, 2, 3, 4, 5, 6]
console.log(...numbers); // 1 2 3 4 5 6

const newNumbers = [...numbers, 10, 100];
console.log(newNumbers) // (8) [1, 2, 3, 4, 5, 6, 10, 100]








