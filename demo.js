var newText=document.createElement('div');
var text=document.createTextNode('Hello');
newText.appendChild(text);
var items=document.querySelector('header .container');
var item=document.querySelector('header h1');
console.log(items);
console.log(item);
items.insertBefore(newText,item);

var newText1=document.createElement('div');
var text1=document.createTextNode('Hello');
newText1.appendChild(text1);
newText1.className='list-group-item';
var items1=document.querySelector('#items');
var item1=document.querySelector(".list-group-item");
console.log(items1);
console.log(item1);
items1.insertBefore(newText1,item1);