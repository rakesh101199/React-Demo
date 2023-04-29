var listItems= document.getElementsByClassName('list-group-item');
//console.log(listItems[2]);
listItems[2].style.backgroundColor='green';

for(let i=0;i<listItems.length;i++){
    listItems[i].style.fontWeight='bold';
}