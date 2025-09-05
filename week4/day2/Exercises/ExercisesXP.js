//Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
for(let i=0; i<colors.length; i++){
    console.log(`${i+1}# choice is ${colors[i]}`);
}
colors.some((color)=>{
    if(color==="Violet"){
        console.log("Yeah");
        return true;
    
    }
    console.log("NO");
    return false;
});


//Exercise 2 : Colors #2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
for(let i=0; i<colors2.length; i++){
    let o = (i+1) > 3 ? ordinal[0] : ordinal[i+1];
    console.log(`${i+1}${o} choice is ${colors2[i]}`);
}

//Exercise 3 : Analyzing
//1 radi ydir liya aray fih [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//2 radi ydir liya string fih [ 'U', 'S', 'A' ]
const country = "USA";
console.log([...country]);
//3 radi yrj3 liya aray fih [ undefined, undefined ]
let newArray = [...[,,]];
console.log(newArray);




//Exercise 4 : Employees
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
let welcomeStudents =[];
users.map((user) => {
    welcomeStudents.push(`Welcome ${user.firstName}`);
});
console.log(welcomeStudents);


console.log(users.filter((user)=>{
    let arry=user.role=="Full Stack Resident";
    return arry;
}))

let residentNames =users.filter(elem => elem.role =="Full Stack Resident")
                    .map(elem => elem.lastName);
console.log(residentNames);


//Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let sum =epic.reduce((acc,num)=>acc+" "+num);
console.log(sum)


// Exercise 6 : Employees #2
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
let passed=students.filter(student=>student.isPassed==true);
console.log(passed);
let passed2=students.filter(student=>student.isPassed==true)
            .forEach(student=>console.log(`Good job ${student.name},you passed the course in ${student.course},`))

