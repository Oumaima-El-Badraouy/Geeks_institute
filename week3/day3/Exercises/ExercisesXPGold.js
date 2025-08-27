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

