//Exercise 1: Random Number
const rand= (Math.random()*101)+1;
console.log(rand);
for(let i=0;i<=rand;i++){
    console.log(i);
}
//Exercise 2: Capitalized letters
function Capitalized (str){
    let index1="";
    let index2="";
    for(let i=0;i<str.length;i++){
        if(i%2===0){
              index1 += str[i].toUpperCase();
            index2 += str[i].toLowerCase();
        } else {
            // index فردي
            index1 += str[i].toLowerCase();
            index2 += str[i].toUpperCase();
        }
    }
    
    return [index1, index2];
  
}
console.log(Capitalized("helloworld"));



// Exercise 3 : Is palindrome?

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));


// Exercise 4 : Biggest Number
function biggestNumberInArray(arrayNumber) {
    const onlynumb=arrayNumber.filter(num=> typeof num === 'number');
    return Math.max(...onlynumb);

}
console.log(biggestNumberInArray([1, 2, 3, 'a', 5]));


//Exercise 5: Unique Elements

