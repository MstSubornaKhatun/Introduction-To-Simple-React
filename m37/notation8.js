const person = {
    name: "Hanna",
    age: 10,
    friends: ["Faha", "Raha"],
    salary: 100,
    10: "secret code"
}

const heroName = person.name;
console.log(heroName); // Hanna


const heroSecret = person[10];
console.log(heroSecret); // secret code


