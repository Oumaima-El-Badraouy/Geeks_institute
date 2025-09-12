// Exercise 1 : HTML Form #3
// file index.html


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>form</title>
// </head>
// <body>
//     <form method="Get" action="data.html">
//         <label for="username">Votre nom :</label>
//         <input type="text" name="username" id="username">
//         <label for="prenom">Votre prenom :</label>
//         <input type="text" name="prenom" id="prenom">
//         <input type="submit" value="Send">

//     </form>

// </body>
// </html>



// file data.html


// <!doctype html>
// <html>
// <head><meta charset="utf-8"><title>Receiver GET</title></head>
// <body>
//   <h2>Received</h2>
//   <div id="output">tsna blaty …</div>

//   <script>
//     const params = new URLSearchParams(window.location.search);
//     const firstName = params.get('username') || '';
//     const lastName = params.get('prenom') || '';
//     const out = document.getElementById('output');
//     if (!firstName && !lastName && !email){
//       out.textContent = 'No data received.';
//     } else {
//       out.innerHTML = `
//         <p><strong>First name:</strong> ${firstName}</p>
//         <p><strong>Last name:</strong> ${lastName}</p>
//       `;
//     }
//   </script>
// </body>
// </html>

