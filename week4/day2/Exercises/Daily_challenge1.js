const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
const usernames = [];
gameInfo.forEach(item =>{
    let name=item.username+"!";
    usernames.push(name);

})
console.log(usernames)
const usernames2= [];
gameInfo.forEach(item =>{
    if(item.score>5){
        let name=item.username+"!";
        usernames2.push(name);
    }
    

})
console.log(usernames2)
let score=gameInfo.reduce((acc,numb)=>acc+numb.score,0);
console.log(score)