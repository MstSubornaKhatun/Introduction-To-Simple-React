/*

const person = {
    name: "Hanna",
    age: 10,
    friends: ["Raha", "Maha", "Faha"],
    family: {
        fatherName: "Kolim Uddin",
        motherName: "Taslima Begom"
    }
}

const jsonData = JSON.stringify(person);
console.log(jsonData); 

output: 
{"name":"Hanna","age":10,"friends":["Raha","Maha","Faha"],"family":{"fatherName":"Kolim Uddin","motherName":"Taslima Begom"}}


const planData = JSON.parse(jsonData);
console.log(planData); 
output:
{name: 'Hanna', age: 10, friends: Array(3), family: {…}}



// fetch
fetch("url") 
.then(res => res.json())
.then(data=>console.log(data))

*/


/*


const person = {
    name: "Faha Raha",
    age: 10,
    friends: ["Tashlima", "Chaity", "Mahiya"],
    finally: {
        fatherName: "Jalal Mia",
        motherName: "Jorina Khatun"
    }
}

const keys = Object.keys(person);
console.log(keys); // (4) ['name', 'age', 'friends', 'finally']
const values = Object.values(person);
console.log(values); // (4) ['Faha Raha', 10, Array(3), {…}]



*/


const products = [
    {name: "redmi", brand: "xioami", price: 2000, color: "black"},
    {name: "sam", brand: "sumsung", price: 5000, color: "white"},
    {name: "apple1", brand: "apple", price: 25000, color: "gold"},
    {name: "apple2", brand: "apple", price: 3000, color: "gold"},
    {name: "redmi2", brand: "xioami", price: 2000, color: "black"},
]

const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "gray"
}

const newArray = [...products, newData];
console.log(newArray)
/*
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'redmi', brand: 'xioami', price: 2000, color: 'black'}
1
: 
{name: 'sam', brand: 'sumsung', price: 5000, color: 'white'}
2
: 
{name: 'apple1', brand: 'apple', price: 25000, color: 'gold'}
3
: 
{name: 'apple2', brand: 'apple', price: 3000, color: 'gold'}
4
: 
{name: 'redmi2', brand: 'xioami', price: 2000, color: 'black'}
5
: 
{name: 'walton', brand: 'walton', price: 3000, color: 'gray'}
length
: 
6
[[Prototype]]
: 
Array(0)

*/

const remainingProducts = products.filter(p=>p.brand!=="xiaomi")

console.log(remainingProducts)
/*
(5) [{…}, {…}, {…}, {…}, {…}]
*/

const newArray2 = [...remainingProducts, newData];
console.log(newArray2);

/*
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
*/