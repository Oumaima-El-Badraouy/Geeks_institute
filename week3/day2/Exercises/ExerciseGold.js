// Exercise 1 : Divisible by three

let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        console.log(`${numbers[i]} is divisible by 3`);
        console.log("true");
    } else {
        console.log(`${numbers[i]} is not divisible by 3`);
        console.log("false");
    }
}

// Exercise 2 : Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let name_user = prompt("Enter your name:");
if (name_user in guestList) {
  console.log(`Hi! I'm  ${name_user}, and I'm from ${guestList[name_user]}`);
} else {
  console.log(`Hi! I'm a guest.`);
}


// Exercise 3 : Playing with numbers

let age = [20,5,12,43,98,55];
let sum =0
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log(sum);
let max = age[0];
for (let i = 1; i < age.length; i++) {
    if (age[i] > max) {
        max = age[i];
    }
}
console.log(max);