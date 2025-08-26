const prompt = require("prompt-sync")();
// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review about arrays
people.splice(0, 1);
people[3]="Jason";
people.push("Oumaima");
console.log(people.indexOf("Mary"));
copy_people = people.slice( 0, 3);
console.log(copy_people);
console.log(people.indexOf("Foo"));//hit false we don't have a value foo in the array
let last =people[people.length - 1];//lenght dyal l array =5  hit kibda mn 0 w last index howa -1 so length-1=4


// Part II - Loops

for(let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if(people[i] === "Devon"){
    break
  }
}
// Exercise 2 : Your favorite colors
colors =["red", "blue", "green", "yellow"];
choices=["1st", "2nd", "3rd", "4th"];
for(let i = 0; i < colors.length; i++) {

  console.log(`My ${choices[i]} choice  is ${colors[i]} `);

}


//  Exercise 3 : Repeat the question

let user_input = prompt("choose a number :","1");
do {
  user_input = prompt("choose a number :");
} while (parseInt(user_input) < 10);




//  Exercise 4 : Building Management



const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Review about objects

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
let length_of_tenants = building.nameOfTenants[1];
let dan = building.numberOfRoomsAndRent.dan[0];
console.log(length_of_tenants, dan);
let sarah = building.numberOfRoomsAndRent.sarah[1];
let david = building.numberOfRoomsAndRent.david[1];
let dan_rent = building.numberOfRoomsAndRent.dan[1];

if (david + sarah > dan_rent) {
    dan_rent -= 1200;
}



// Exercise 5 : Family



let family = {
    parents: "Alice",
    children: "Charlie",
    pets: "Dog"
};
for (let key in family) {
    console.log(key);
}
for (let value in family) {
    console.log(family[value]);
}
// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
let ljomla = "";

for (let key in details) {
  ljomla +="my name is " + key + " " + details[key] + " ";
}

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let first_ltr=names.map(name => name[0]);
let sorted = first_ltr.sort();
let new_name = sorted.join("");
console.log(new_name);
