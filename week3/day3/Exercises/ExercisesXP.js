// Exercise1
 //Part I
            function sayHello(){
               
                 window.document.body.innerHTML = "<h1>Hello World</h1>";
            }
          // let timer=setTimeout(sayHello,2000); 
            //Part II
            function sayHello2(){
                let p=document.getElementById('container');
                let child=document.createElement('p');
                child.textContent="hello world";
                p.appendChild(child);

            }
             let timer=setTimeout(sayHello2,2000);
            //Part III
         let container = document.getElementById('container');
let button = document.getElementById('clear');

function addParagraph() {
    let p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);

    if (container.children.length >= 5) {
        clearInterval(timer2);
    }
}

let timer2 = setInterval(addParagraph, 2000);

button.addEventListener('click', function() {
    clearInterval(timer2);
});
       

//  Exercise 2 : Move the box
let box = document.getElementById("animate");
function myMove(){
   let position =0;
   let timer=setInterval(function(){
    position+=1;
    box.style.left=position+"px";
    if(position >=350){
        clearInterval(timer);
    }
   },10)
}


