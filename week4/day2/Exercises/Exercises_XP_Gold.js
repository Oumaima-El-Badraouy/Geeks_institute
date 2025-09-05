// Exercise 1 : Analyzing the map method
[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
//ratrj3 lina [2,4,6] katchd koula item wkadiro *2

// Exercise 2: Analyzing the reduce method
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);
//ratkhrj lina array fyh [1,2,0,1,2,3]


// Exercise 3 : Analyze this code
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    // alert(num);
    return num * 2;
})
//[1,4,8,10,16,18]
console.log(newArray)



// Exercise 4 : Nested arrays
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
const result = array.map(item => Array.isArray(item[0]) ? item.flat(2) : item[0]);
console.log(result)
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const result2 = [greeting.map(item => [item.join(" ") ]).join(" ")];
console.log(result2)
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const res3=trapped.flat(Infinity)
console.log(res3)