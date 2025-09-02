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

function uniqueElements(arr) {
    return [...new Set(arr)];
}
console.log(uniqueElements([1, 2, 3, 2, 1]));

//Exercise 6: Calendar
function createCalendar(year, month) {
    let mon = month - 1; 
    let d = new Date(year, mon);
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach(day => {
        let th = document.createElement('th');
        th.textContent = day;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement('tbody');
    tr = document.createElement('tr');
    let firstDay = (d.getDay() + 6) % 7;
    for (let i = 0; i < firstDay; i++) {
        tr.appendChild(document.createElement('td'));
    }

    while (d.getMonth() === mon) {
        let td = document.createElement('td');
        td.textContent = d.getDate();
        tr.appendChild(td);

        if (((d.getDay() + 6) % 7) === 6) { 
            tbody.appendChild(tr);
            tr = document.createElement('tr');
        }
        d.setDate(d.getDate() + 1);
    }
    if (tr.children.length > 0) {
        while (tr.children.length < 7) {
            tr.appendChild(document.createElement('td'));
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    document.body.appendChild(table);
}
createCalendar(2012, 9);