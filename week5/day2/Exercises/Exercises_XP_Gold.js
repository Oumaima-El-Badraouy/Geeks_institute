// // Exercise 1 : Giphy API #2
// const giphy=async()=>{
//     try{
//         const response=await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//          if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data=await response.json();
//         const randomnumber=Math.floor(Math.random()*data.data.length);
//         const gif=data.data[randomnumber].images.original.url;
//         const img= document.createElement("img");
//         img.src=gif;
//         document.body.appendChild(img);
//     }
//     catch(error){
//         console.error("Error fetching data from Giphy API:", error);
//     }
// }
// giphy();

// // Exercise 2 : Analyze #2
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

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()

// radi tla3 hady lwla '==SEQUENTIAL START==' puis "starting slow promise"puis "slow promise is done"  3ad 
//"slow" puis "starting fast promise"puis "fast promise is done" puis'fast'


// Exercise 3 : Analyze #3
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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();
    console.log(await slow);
    console.log(await fast);
}

setTimeout(concurrentStart, 4000)
//ntsnaww 4s puis n3ayet lconcurrentStart rady ytl3 lina '==CONCURRENT START with await=='puis
// starting slow promise
// starting fast promise
// slow promise is done
// slow
// fast promise is done
// fast


// Exercise 4 : Modify fetch with Async/Await
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/WRONG_URL", // URL خاطئ
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
    try {
        const results = await Promise.all(urls.map(async url => {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        }));

        const [users, posts, albums] = results;
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.log("ooooooops", error);
    }
}

getData();
