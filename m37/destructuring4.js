const friends = ["Hena", "Alo", "Parul"];

/*
const element1 = friends[0];
const element2 = friends[1];
const element3 = friends[2];

console.log(element1, element3, element2); // Hena Parul Alo

*/

/*


*/ 

const [element1, element2, element3] = friends;
console.log(element3); // Parul


const person =  {
    name: "Hanna Minu",
    age: 10,
    friends2: ["Pari", "Tanisha"],
    county: "Bangladesh"
}

console.log(person.county); // Bangladesh


const {name, age, friends2, county} = person;
console.log(friends2); // (2) ['Pari', 'Tanisha']


