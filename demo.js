// Adding Del and Edit Button.

var items=document.getElementsByTagName('li');

Array.from(items).forEach(element => {

var deletebtn = document.createElement('button');
var dtext =document.createTextNode('x');
deletebtn.style.backgroundColor='red';
deletebtn.style.marginLeft='300px';
deletebtn.className='del';
deletebtn.appendChild(dtext);

element.appendChild(deletebtn);

var editbtn = document.createElement('button');
var etext =document.createTextNode('Edit');
editbtn.style.backgroundColor='yellow';
editbtn.style.marginLeft='30px';
editbtn.appendChild(etext);

element.appendChild(editbtn);
});

var itemList=document.getElementById('items');
itemList.addEventListener('click',delFunction);
console.log(itemList);
function delFunction(e){
    console.log(e.target);
    if(e.target.className == 'del'){
        if(confirm('Are you sure')){
            console.log('removed');
            var parent=e.target.parentElement;
            itemList.removeChild(parent);

        }
    }
}

// filter funtcion
var fil = document.getElementById('filter').addEventListener('keyup',filterFunction);

function filterFunction(e){
    var text= e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}


// Adding item.

var form= document.getElementById('addForm');
var itemList1=document.getElementById('item');
var items = document.getElementById('items');


form.addEventListener('submit',addFunction);


function addFunction(e){
    e.preventDefault();
    var newItem=itemList1.value;
    console.log(newItem);
    var newI= document.createElement('li');
    var newV=document.createTextNode(newItem);
    newI.className='list-group-item';
    newI.appendChild(newV);
    

    var deletebtn = document.createElement('button');
    var dtext =document.createTextNode('x');
    deletebtn.style.backgroundColor='red';
    deletebtn.style.marginLeft='300px';
    deletebtn.className='del';
    deletebtn.appendChild(dtext);

    newI.appendChild(deletebtn);


    var editbtn = document.createElement('button');
    var etext =document.createTextNode('Edit');
    editbtn.style.backgroundColor='yellow';
    editbtn.style.marginLeft='30px';
    editbtn.appendChild(etext);

    newI.appendChild(editbtn);

    items.appendChild(newI);

}