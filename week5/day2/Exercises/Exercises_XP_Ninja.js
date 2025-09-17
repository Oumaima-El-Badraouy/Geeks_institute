// Exercise 1 : Giphy API #3
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>ex xp ninja</title>
// </head>
// <body>
//     <form  method="get">
//         <input type="text" name="search" placeholder="Search Giphy">
//         <button type="submit">Search</button>
//     </form>
 
//         <button id="submit" >Delete</button>

//     <script src="Exercises_XP_Ninja.js"></script>
// </body>
// </html>
let form=document.querySelector("form");
let input=document.querySelector("input");
let deletebtn=document.querySelector("#submit");
form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    let searchTerm=input.value;
    const giphy=async()=>{
        try{
            const response=await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data=await response.json();
            const randomnumber=Math.floor(Math.random()*data.data.length);
            const gif=data.data[randomnumber].images.original.url;
            const img= document.createElement("img");
            img.src=gif;
            document.body.appendChild(img);
        }
        catch(error){
            console.error("Error fetching data from Giphy API:", error);
        }
    }
    giphy();
}); 
deletebtn.addEventListener("click",()=>{
    let images=document.querySelectorAll("img");
    images.forEach(img=>img.remove());
});

//  Exercise 2 : Analyze #4
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () {
//     console.log('==CONCURRENT START with Promise.all==');
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
//         console.log(messages[0]);
//         console.log(messages[1]);
//     });
// }

// setTimeout(concurrentPromise, 1000)
// tntsnaw 1s radi tl3 lina '==CONCURRENT START with Promise.all==' puis "starting slow promise" puis "starting fast promise" 3ad
// "fast promise is done" puis "slow promise is done" puis "slow" puis "fast"


// Exercise 3 : Analyze #5
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let parallel = async function () {
//     console.log('==PARALLEL with await Promise.all==');
    // Start 2 "jobs" in parallel and wait for both of them to complete
//     await Promise.all([
//         (async () => console.log(await resolveAfter2Seconds()))(),
//         (async () => console.log(await resolveAfter1Second()))()
//     ]);
// }

// setTimeout(parallel, 5000)
//  radi tla3 lina hadi b3d 5s '==PARALLEL with await Promise.all==' puis "starting slow promise" puis "starting fast promise" 3ad
// fast promise is done" puis "fast" puis "slow promise is done" puis "slow"


// Exercise 4 : Analyze #6
let resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
};

let resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
};

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message) => console.log(message));
    resolveAfter1Second().then((message) => console.log(message));
}

setTimeout(parallelPromise, 13000)
// radi tla3 lina hadi b3d 13s '==PARALLEL with Promise.then==' puis "starting slow promise" puis "starting fast promise" 3ad
//"fast promise is done" puis "fast" puis "slow promise is done" puis "slow"