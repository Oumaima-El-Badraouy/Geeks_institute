// Exercise 1 : Merge Words
function mergeWords(str){
   return function nextWordfunc(nextword){
    if(nextword=== undefined){
      return str;
    }
    str += ' ' + nextword;
    return nextWordfunc;
    
   }
}
console.log(mergeWords('Hello')('World')('!')());
