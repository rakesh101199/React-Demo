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

