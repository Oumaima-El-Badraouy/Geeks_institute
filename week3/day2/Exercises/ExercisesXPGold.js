//Exercise 1 : is_Blank
function isBlank(str) {
  return str.trim() === "";
}
console.log(isBlank('')); 
console.log(isBlank('abc')); 

//Exercise 2 : Abbrev_name
function abbrevName(name) {
  const parts = name.split(" ");
  const firstName = parts[0];
  const lastName = parts[1].charAt(0).toUpperCase();
  return `${firstName} ${lastName}.`;
}

console.log(abbrevName("Robin Singh")); 


//Exercise 3 : SwapCase


let chaine ="Hello World";
console.log(chaine.split(" ").map(mot => mot.charAt(0).toLowerCase() + mot.slice(1)).join(" "));



// Exercise 4 : Omnipresent value

function isOmnipresent(arr, value) {
  return arr.every(subArr => subArr.includes(value));
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));


// Exercise 5 : Red table

// <!DOCTYPE HTML>
// <html>
// <head>
//   <style>
//     table {
//       border-collapse: collapse;
//     }
//     td {
//       border: 1px solid black;
//       padding: 3px 5px;
//     }
//   </style>
// </head>

// <body>
//   <table>
//     <tr>
//       <td>1:1</td>
//       <td>2:1</td>
//       <td>3:1</td>
//       <td>4:1</td>
//       <td>5:1</td>
//     </tr>
//     <tr>
//       <td>1:2</td>
//       <td>2:2</td>
//       <td>3:2</td>
//       <td>4:2</td>
//       <td>5:2</td>
//     </tr>
//     <tr>
//       <td>1:3</td>
//       <td>2:3</td>
//       <td>3:3</td>
//       <td>4:3</td>
//       <td>5:3</td>
//     </tr>
//     <tr>
//       <td>1:4</td>
//       <td>2:4</td>
//       <td>3:4</td>
//       <td>4:4</td>
//       <td>5:4</td>
//     </tr>
//     <tr>
//       <td>1:5</td>
//       <td>2:5</td>
//       <td>3:5</td>
//       <td>4:5</td>
//       <td>5:5</td>
//     </tr>
//   </table>
//   <script>
//     let table = document.body.firstElementChild;
//     for (let i = 0; i < table.rows.length; i++) {
//       for (let j = 0; j < table.rows[i].cells.length; j++) {
      
//           table.rows[i].cells[j].style.backgroundColor = "red";
        
//       }
//     }
//   </script>
// </body>
// </html>
