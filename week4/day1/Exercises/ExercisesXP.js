// Exercise 1 : Scope
// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     console.log(`inside the funcOne function ${a}`);
// }
// funcOne()
// #1.2 radi ytl3 lina error hit const variables maymknch t3awd t3tih value akhra

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
//     return a;
// }

// function funcThree() {
//     console.log(`inside the funcThree function ${a}`);
// }
//  #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
//  #2.2 radi ytl3 lina error hit const variables maymknch t3awd t3tih value akhra


 //#3
// function funcFour() {
//     window.a = "hello";
// }
// function funcFive() {
//     console.log(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()
// funcFive()
//hna window kat3tabr global var so radi n9dro n3awdou nst3mlo f ay function akhra 

//#4
// const a = 1;
// function funcSix() {
// const a = "test";
// console.log(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix()
// #4.2 the same result 7it les deux const machy fnfs scope

//#5
const a = 2;
if (true) {
    const a = 5;
    console.log(`in the if block ${a}`);
}
console.log(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 the same result 7it les deux const machy fnfs scope




//Exercise 2 : Ternary operator

let winBattle=()=>{
    return true;
}
let experiencePoints = winBattle() ? 10 : 0;
console.log(experiencePoints);


// Exercise 3 : Is it a string ?
let stringWord= word=>typeof word === "string";

console.log(stringWord("hello"));

//Exercise 4 : Find the sum

let sum=(a,b)=>a+b;
console.log(sum(5,10));

// Exercise 5 : Kg and grams
//1
function Kilograms(kg) {
    return kg * 1000;
}
console.log(Kilograms(5));
//2
let Kilograms2=function(kg) {
    return kg * 1000;
}
console.log(Kilograms2(5));
//The difference between a function declaration and a function expression is that a function declaration gives the function a name at both declaration and execution time, while a function expression, which is stored in a variable, only assigns the function when the code reaches that point
//4
let Kilograms3=kg=>kg * 1000;
console.log(Kilograms3(5));

//Exercise 6 : Fortune teller
(function familyFunc(numbchild, partners_name,  geographic_location, job_title) {
    console.log(`You will be a ${job_title} in ${geographic_location}, and married to ${partners_name} with ${numbchild} kids.`);
})(3, "Alice", "Wonderland", "Engineer");

//Exercise 7 : Welcome
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <nav>
//         <ul style="list-style: none; display: flex; gap: 20px; padding: 0;">
//             <li><a href="#">Accueil</a></li>
//             <li><a href="#">À propos</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//         </ul>
//         <p  id="welcomeMessage"></p>
//         <script>
// (function welcomeFunc(name) {
//             let message=`Welcome ${name}`;
//             let p=document.getElementById("welcomeMessage");
//             p.textContent=message;
// })("Oumaima");
// </script>
// </body>
// </html>



//Exercise 8 : Juice Bar
function makeJuice(size){
    function addIngredients(ing1, ing2, ing3){
        console.log(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, and ${ing3}.`);
    }
    addIngredients("apple", "banana", "cherry");
}
makeJuice("large");
//part 2
function makeJuice2(size){
    let ingredients=[];
    function addIngredients2(ing1, ing2, ing3){
        ingredients.push(ing1, ing2, ing3);
    }
    function displayJuice(){
        console.log(`The client wants a ${size} juice, containing ${ingredients.join(", ")}.`);
    }
    addIngredients2("apple", "banana", "cherry");
    addIngredients2("orange", "carrot", "watermelon");
    displayJuice();
}
makeJuice2("large");