// exercise 1
 let h1=document.querySelector('h1');
    console.log(h1);
    let lastp=document.querySelector('p:last-of-type');
    lastp.remove();
   let h2=document.querySelector('h2');
   h2.addEventListener('click',function(){
       h2.style.color='red';
       
   })
   let h3=document.querySelector('h3');
   h3.addEventListener('click',function(){
       h3.style.display='none';

   })
    let article=document.querySelector('article');
    let child=document.createElement('button')
    child.textContent='Click me';
    article.appendChild(child);
    let paragraphs=document.querySelectorAll('p');

    child.addEventListener('click',function(){
        paragraphs.forEach(function(parag){
            parag.style.fontWeight='bold';
        })
        
    })
    h1.addEventListener('mouseover',function(){
        let rand=Math.random()*100;
        h1.style.fontSize=rand +"px";
    })
   let p2 = document.getElementById('p2');
   function fadeOut(element){
    let opacity=1;
    let timer=setInterval(function(){
        opacity -=0.05;
        element.style.opacity=opacity;
        if(opacity <=0){
            
            opacity=1;
        }
    },50)
   }
fadeOut(p2);

//  Exercise 2 : Work with forms

    let form=document.querySelector('form');
    console.log(form);
    let fname=document.getElementById('fname');
    console.log(fname);
    let lname=document.getElementById('lname');
    console.log(lname);
     let fname2=document.getElementsByName('firstname');
    console.log(fname2);
    let lname2=document.getElementsByName('lastname');
    console.log(lname2);
    let submit=document.getElementById('submit');
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let ul=document.getElementsByClassName('usersAnswer')[0];
        let first=fname.value;
        let last=lname.value;
        let li1=document.createElement('li');
        li1.textContent=`First Name: ${first}`;
        let li2=document.createElement('li');
        li2.textContent=`Last Name: ${last}`;
        ul.appendChild(li1);
        ul.appendChild(li2);
    })

// Exercise 3 : Transform the sentence
let allBoldItems;
    function getBoldItems(){
        let strongp=document.querySelectorAll('p strong');
        allBoldItems=Array.from(strongp,el=>el.textContent);
        console.log(allBoldItems);
    }
    getBoldItems();
    function highlight(){
        allBoldItems.forEach(function(item){
            let strongs=document.querySelectorAll('strong');
            strongs.forEach(function(strong){
                if(strong.textContent===item){
                    strong.style.color='blue';
                }
            })
        })
    }
    function returnItemsToDefault(){
        allBoldItems.forEach(function(item){
            let strongs=document.querySelectorAll('strong');
            strongs.forEach(function(strong){
                if(strong.textContent===item){
                    strong.style.color='black';
                }
            })
        })
    }
    let p=document.querySelector('p');
    p.addEventListener('mouseover',function(){
        highlight();
    })
    p.addEventListener('mouseout',function(){
        returnItemsToDefault();
    })

// Exercice 4 : Volume of a sphere

let form=document.getElementById('MyForm');
            let radius=document.getElementById('radius');
            let volume=document.getElementById('volume');
            let submit=document.getElementById('submit');
            form.addEventListener('submit',function(e){
                e.preventDefault();
                let r=Number(radius.value);
                let v=(4/3)*Math.PI*Math.pow(r,3);
                volume.value=v.toFixed(2);
                
            })