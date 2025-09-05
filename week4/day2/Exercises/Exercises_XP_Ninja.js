// Exercise 1 : Dog age to Human years
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
let sum =0;
for(let i=0;i<data.length;i++){
     sum +=data[i].age*7;
}
console.log(sum)
let sum2= data.reduce((acc,num)=>acc+num.age*7, 0)
console.log(sum2)


//Exercise 2 : Email


const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
let nowhitespices=userEmail3.trim();
console.log(nowhitespices)


//Exercise 3 : Employees #3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const emptyarry={}
users.forEach(item =>{
    let first=item.firstName;
     let last=item.lastName;
     let fullname =first+" "+last;
     let val=item.role;
     emptyarry[fullname]=val

})
console.log(emptyarry);

// Exercise 4 : Array to Object

const letters = ['x', 'y', 'z', 'z'];
let obj={};
for(let i=0;i<letters.length;i++){
    let a =letters[i];
    obj[letters[i]]=(obj[a]||0)+1
}
console.log(obj);

let obj2=new Object(letters.reduce((acc,num)=>{
    acc[num]=(acc[num]||0)+1;
    return acc;

},{}));
console.log(obj2);