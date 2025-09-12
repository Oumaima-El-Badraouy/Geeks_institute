const array1=(arrayvariable)=>{

    if(arrayvariable.every((e=>e.value==true))){
        return true
    }
    else if(arrayvariable.every((e=> e.value==false))){
        return true
    }
    else{
        return false
    }
}
const arr = [
    {value: true},
    {value: true},
    {value: true}
];

console.log(array1(arr));