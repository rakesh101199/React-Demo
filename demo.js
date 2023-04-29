var listItems= document.getElementsByClassName('list-group-item');
//console.log(listItems[2]);
listItems[1].style.backgroundColor='black';
listItems[3].style.display='None';

var item=document.querySelector('.list-group-item:nth-child(2)');
item.style.color='green';
console.log(item);

var items=document.querySelectorAll('.list-group-item:nth-child(odd)')
console.log(items);

for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='brown';
}







