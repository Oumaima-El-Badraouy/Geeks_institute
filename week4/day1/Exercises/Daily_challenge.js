let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
let displayGroceries=()=>{
    groceries.fruits.forEach(fruit=>{
        console.log(fruit);
    })
}
// displayGroceries()
let cloneGroceries = () => {
    let user =client;
    user="Betty";
    //yup hit db kitcharkou nfs lvalue li ratbdl f user ratbdl taf client
    //shopping wlat katakhoud nfs lvalues dyal groceries so li brina nbdlouh raytbdl ry f shopping machy f objevt groceries
    let shopping = {...groceries};
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    return shopping;
}
console.log(cloneGroceries());



