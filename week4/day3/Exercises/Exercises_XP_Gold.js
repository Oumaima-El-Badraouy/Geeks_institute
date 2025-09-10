// Exercise 1 : print Full Name
function printFullName({ first, last }) {
    return `Your full name is ${first} ${last}`;
}
console.log(printFullName({ first: 'Elie', last: 'Schoppik' }));

// Exercise 2 : keys and values
function keysAndValues(obj){
    const keys=Object.keys(obj).sort()
    const values=Object.values(obj).map(key=>obj[key])
    return [keys,values]
}
console.log(keysAndValues({a: "ou" , b: "gf"}))


// Exercise 3 : Counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();//1
counterOne.increment();//2

const counterTwo = counterOne;
counterTwo.increment();//3

console.log(counterOne.count);//3
