const {faker} = require('@faker-js/faker');
const users=[
    {name:'Alice',address:'123 Main St',country:'USA'},
    {name:'Bob',address:'456 Elm St',country:'Canada'},
    {name:'Charlie',address:'789 Oak St',country:'UK'},
    {name:'David',address:'321 Pine St',country:'Australia'},
    {name:'Eva',address:'654 Maple St',country:'Germany'},
];
function addUser(name,address,country){
    users.push({name,address,country});
    console.log(`User ${name} added successfully.`);
}
addUser(
    faker.person.fullName(),
    faker.location.streetAddress(),
    faker.location.country()
);
console.log("All Users:", users);