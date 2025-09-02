let sentence = "The movie is not that bad, I like it";
let index_not = sentence.indexOf("not");
let index_bad = sentence.indexOf("bad");
if (index_not !== -1 && index_bad !== -1 && index_not < index_bad) {
     sentence = sentence.slice(0, index_not) + "good" + sentence.slice( index_bad + 3) ;
}
console.log(sentence);