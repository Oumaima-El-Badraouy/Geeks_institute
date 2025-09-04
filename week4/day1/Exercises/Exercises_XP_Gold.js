//Exercise 1 : Nested functions
let landscape = () => {
 let result = "";

 let flat =(x)  => {
   for(let count = 0; count<x; count++){
     result = result + "_";
   }
 }

 let mountain = x => {
   result = result + "/"
   for(let counter = 0; counter<x; counter++){
     result = result + "'"
   }
   result = result + "\\"
 }

 flat(4);
 mountain(4);
 flat(4)

 return result;
}

landscape()
//final result :"____/''''\____"




//Exercise 2 : Closure
//ratl3 lina 13 x=10 w y=3
const addTo = x => y => x + y;
const addToTen = addTo(10);
console.log(addToTen(3));

// Exercise 3 : Currying
//ratl3 lina 31
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1))


//Exercise 4 : Currying
//ratl3 lina 17
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
console.log(add5(12))

//Exercise 5 : Composing
// add1 hya f w add6 hya g w 10 hya a so compose(add1, add6)(10) hya add1(add6(10)) =add1(16) =17
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add6 = (num) => num + 6;
console.log(compose(add1, add6)(10))
