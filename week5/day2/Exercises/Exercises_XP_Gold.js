// Exercise 1 : Giphy API #2
const giphy=async()=>{
    try{
        const response=await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
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
