 //Exercise 1 : Select a kind of Music
    let sel=document.getElementById('genres');
    
    let child=document.createElement('option');
    child.value='classic';
    child.text='Classic';
    child.selected=true;
    sel.appendChild(child);
    console.log(sel.value)
    let x = 10;
// Exercise 2: Delete colors
    let btn =document.querySelector('input');
    let selection =document.getElementById('colorSelect');
  
    function removecolor() {
        let selectedIndex = selection.selectedIndex;
        if (selectedIndex !== -1) { 
            selection.remove(selectedIndex);  
        }
    } ;
     btn.addEventListener('click', removecolor);
// Exercise 3 : Create a shopping list
let shoppingList=[];
let root = document.getElementById('root');
let form = document.createElement('form');
let input = document.createElement('input');
input.type = 'text';
let addButton = document.createElement('button');
addButton.textContent = 'AddItem';
form.appendChild(input);
form.appendChild(addButton);
root.appendChild(form);

function addItem(e) {
    e.preventDefault(); // bach ma treloadach page
    let item = input.value;
    if(item !== '') {
        shoppingList.push(item); 
        renderList(); 
        input.value = ''; 
    }
}
addButton.addEventListener('click', addItem);
let ul = document.createElement('ul');
root.appendChild(ul);

function renderList() {
    ul.innerHTML = ''; 
    shoppingList.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
}
let clearBtn = document.createElement('button');
clearBtn.textContent = 'ClearAll';
root.appendChild(clearBtn);
function clearAll() {
    shoppingList = []; 
    renderList();     
}
clearBtn.addEventListener('click', clearAll);
