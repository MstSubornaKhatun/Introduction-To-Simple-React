/*
false value 
0, -0, "", false, null, undefined



true
"sadia", 4343, {}, [], true


*/

/*
const test = "";
if (test){
    console.log("its truthy")
} 
else{
    console.log("its falsy")
}
*/ 

/*
const test = "";
test ? console.log("its truthy") : console.log("its falsy")
*/ 

/*
const num = 40;
const result = (num >= 10 && num < 20) ? "true" : "false";

console.log(result) // false


*/




const isActive = false; 
const showUser = () => console.log("show user")
const hideUser = () => console.log("hide user")


// isActive ? showUser() : hideUser();


isActive && showUser();
isActive || hideUser();


let num = 10;
const result = 10 + "";
console.log(typeof result); // string


let num2 = "10";
const result2 = num2 - 2;
console.log(typeof result2) // number




