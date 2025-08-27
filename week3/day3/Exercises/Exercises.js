// Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible( ) {
    let arry=[];
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            arry.push(i);
        }
       
    }
    let sum = arry.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum is :", sum);
}
displayNumbersDivisible( );
// bonus
// function displayNumbersDivisiblel( divisor) {
//     let arry=[];
//     for (let i = 0; i <= 500; i++) {
//         if (i % divisor === 0) {
//             console.log(i);
//             arry.push(i);
//         }
       
//     }
//     let sum = arry.reduce((acc, curr) => acc + curr, 0);
//     console.log("Sum is :", sum);
// }
// displayNumbersDivisiblel(23);


// Exercise 2 : Shopping List



const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList=new Array("banana", "orange", "apple");
function myBill(){
    let price=0;
    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];
        if (item in stock && stock[item] > 0) {
            price += prices[item];
            stock[item]--;
        } else {
            console.log(`${item} is out of stock`);
        }
    }
    console.log("Total price is:", price);
}
myBill();





// Exercise 3 : What’s in my wallet ?


function changeEnough(itemPrice, amountOfChange){
    for(let i=0;i<=amountOfChange.length;i++){
        let totalChange=amountOfChange[0]*0.25 + amountOfChange[1]*0.10 + amountOfChange[2]*0.05 + amountOfChange[3]*0.01;
        if(totalChange>=itemPrice){
            return true;
        }else{
            return false;
        }
    }
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));

// Exercise 4 : Vacations Costs
function hotelCost(){
    let prix;
    do{
        prix =prompt("enter a number");
        prix=Number(prix);
        
    }
    while(prix<=0 || isNaN(prix)){
    }
    return prix*140;
}
hotelCost();

function planeRideCost(){
    let city;
    do{
        city=prompt("enter your city :");
        city=city.trim().toLowerCase();
    }while(city=="");
    if(city =="London"){
        return `183$`
    }
     else if(city =="Paris"){
        return `220$`
    }
    else{
        return `300$`
    }
}
planeRideCost();


function rentalCarCost(){
    let days;
    do{
        days =prompt("enter a number");
        days=Number(days);

    }
    while(days<=0 || isNaN(days)){
    }
    if (days > 10) {
        return days * 40 * 0.95; // Apply 5% discount
    }
    return days * 40;
}
function totalVacationCost(){
    return `The car cost: ${rentalCarCost()} + the hotel cost: ${hotelCost()} + the plane cost: ${planeRideCost()}`;
}
// Exercise 5 : Users
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="container">Users
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul></div>
// <script>
//     let container=document.getElementById("container");
//     console.log(container);
//     let list1=document.querySelectorAll(".list")[0].children[1];
//         let list=document.querySelectorAll(".list")[0].children[0];

//     list1.innerHTML="Richard";
//     console.log(list1);
//     let list2=document.querySelectorAll(".list")[1].children[1];
//     list2.remove();
//     for(let i=0;i<document.querySelectorAll(".list").length;i++){
//         let li=document.querySelectorAll(".list")[i].children[0];
//         li.innerHTML="Oumaiama";
        
//     }
//     let lists = document.getElementsByClassName("list");
//     for (let i = 0; i < lists.length; i++) {
//         lists[i].classList.add("student_list");
//     }
//     lists[0].classList.add("university");
//     lists[0].classList.add("attendance");

//     container.style.backgroundColor = "lightblue";
//     container.style.padding = "20px";
//     let child=document.querySelectorAll(".list")[0].children[1];
//     child.style.display = "none";
//     list1.style.border="2px solid red";
//     document.body.style.fontSize = "20px";

//     let firstUlFirst = document.querySelectorAll(".list")[0].children[0];
//     let secondUlFirst = document.querySelectorAll(".list")[1].children[0];
//     alert(`Hello ${firstUlFirst.innerHTML} and ${secondUlFirst.innerHTML}`);


// </script>
// </body>
// </html>


// Exercise 6 : Change the navbar
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="navBar">
//     <ul id="ul">
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>

// <script>
//     let div =document.getElementById("navBar");
//     div.setAttribute("id", "socialNetworkNavigation");
//     let child = document.createElement("li");
//     let text = document.createTextNode("Logout");
//     child.appendChild(text);
//     div.appendChild(child);
//     let first=document.getElementById("ul").firstElementChild.textContent;
//     let second=document.getElementById("ul").lastElementChild.textContent;
//     alert(`Hello ${first} and ${second}`);
// </script>
// </body>
// </html>


// Exercise 7 : My Book List

