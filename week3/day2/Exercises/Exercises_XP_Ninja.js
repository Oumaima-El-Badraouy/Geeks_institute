// Exercise 1 : Checking the BMI
let object = {
    FullName: "Oumaima",
    Mass: 70,
    Height: 1.75,
    calculate: function() {
        return this.Mass / (this.Height * 2);
    }
};
let object2 = {
    FullName: "John",
    Mass: 80,
    Height: 1.8,
    calculate: function() {
        return this.Mass / (this.Height * 2);
    }
};
function deffBMI(object,object2){
    if (object.calculate() > object2.calculate()) {
        console.log(`${object.FullName}'s BMI (${object.calculate()}) is higher than ${object2.FullName}'s BMI (${object2.calculate()})`);
        object.FullName=null
    } else if (object.calculate() < object2.calculate()) {
        console.log(`${object2.FullName}'s BMI (${object2.calculate()}) is higher than ${object.FullName}'s BMI (${object.calculate()})`);
    } else {
        console.log("They have the same BMI");
    }
}

deffBMI(object, object2);





// Exercise 2 : Grade Average


function findAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    let avg= sum / gradesList.length;
    
    return avg;
    

}
function Minavg(){
   let avg = findAvg([50, 60, 70, 80, 90]);
   if(avg < 65) {
        return "failed";
    } else {
        return "passed";
    }
}
console.log(Minavg());
