// 3

const products = [
    {name: "redmi", brand: "xioami", price: 2000, color: "black"},
    {name: "sam", brand: "sumsung", price: 5000, color: "white"},
    {name: "apple1", brand: "apple", price: 25000, color: "gold"},
    {name: "apple2", brand: "apple", price: 3000, color: "gold"},
    {name: "redmi2", brand: "xioami", price: 2000, color: "black"},
]

/*

const result = products.map(produc => produc.price);
console.log(result); // (5) [2000, 5000, 25000, 3000, 2000]


products.forEach(product=>console.log(product.name))

output:
redmi
sam
apple1
apple2
redmi2

*/

/*
const result = products.filter(product => product.brand === "apple")
console.log(result) // (2) [{…}, {…}]

*/ 


const result = products.find(product=>product.name === "apple1");
console.log(result); // {name: 'apple1', brand: 'apple', price: 25000, color: 'gold'}brand: "apple"color: "gold"name: "apple1"price: 25000[[Prototype]]: Object







