// Exercise 1 : HTML Form
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>form</title>
// </head>
// <body>
//     <form method="Get">
//         <label for="username">Votre nom :</label>
//         <input type="text" name="username" id="username">
//         <label for="comments">Commentaires :</label>
//         <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Entrez vos commentaires ici..."></textarea>
//         <input type="submit" value="Send">

//     </form>
//     <script>
//         let form=document.querySelector('form');
//         form.addEventListener("submit",async(e)=>{
//             e.preventDefault()
//             let form1=new FormData(form)
//             for (let [key, value] of form1.entries()) {
//                 console.log(key, value)
//             }
//         })
//     </script>
// </body>
// </html>
//data katb9a fnfs lpage mais fl url


// Exercise 2 : HTML Form #2
//data katb9a fnfs lpage (HTTP body) mais makatbanch fl url 


// Exercise 3 : JSON Mario
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}
let jasonobject=JSON.stringify(marioGame)
console.log(jasonobject)
//kitl3hom  liya like jason
const prettyJSON = JSON.stringify(marioGame, null, 2);
console.log(prettyJSON);
