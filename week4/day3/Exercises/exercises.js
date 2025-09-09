// Exercise 1 : Location
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// rayl3 lina data li flvalues dyal object dyalna person 

// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    const {first,last}=objUser;
    console.log(`Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 }
const array2=Object.entries(users)
 const array3=array2.map(([key,value])=>[key, value*2])
console.log(array3)

// Exercise 4 : Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//ratkhrj lina object


// 🌟 Exercise 5 : Dog class
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//the correct answer is the ption number 2 
  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Exercise 6 : Challenges

// [2] === [2] 
// {} === {} bjouj false hit js makat9arnch les objs b value kat9arn bl reference w koula object mn hadou endou espace flmemoire deff so dima ratkoun false 



// 2

const object1 = { number: 5 }
const object2 = object1
const object3 = object2
const object4 = { number: 5}

object1.number = 4
console.log(object2.number)//4 
console.log(object3.number)//4
console.log(object4.number)//5
//obj1 w obj2 w obj3 kolhom ratkoun endhom nfs lvalue dyal key number hit 
// fach kadir chy variable kat asseigné lih chy var akhour kiwli yakhoud 
// nfs lvallue kiwliw mcharkinha 
// y3ni kiwli b7al khouh twimi


class Animal {
    constructor(name,type,color){
        this.name=name,
        this.color=color,
        this.type=type
    }

}
class Mammal  extends Animal{
    constructor(name,type,color){
        super(name,type,color)
    }
     sound (sounddesc) {
        console.log(`${sounddesc} I'm a ${this.type},named ${this.name}, my color is ${this.color}`)
    }
}
const farmerCow =new Mammal("dogdog","dog","dog");
farmerCow.sound("haw")