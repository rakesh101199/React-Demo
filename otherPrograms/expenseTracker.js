var form = document.getElementById('exp');
var amt = document.getElementById('amt');
var des = document.getElementById('des');
var choose = document.getElementById('choose');
var addExp = document.getElementById('btn');
var items = document.getElementById('items');


addExp.addEventListener('click',addExpense);
items.addEventListener('click',delEditFunction);

function addExpense(e){
    e.preventDefault();
    var totalDes = amt.value +' '+ des.value +' '+ choose.value;
    //Creating Li tag to display
    var total = document.createElement('li');
    var totalTxt = document.createTextNode(totalDes);
    //Adding Delete
    var del = document.createElement('button');
    var delTxt = document.createTextNode('Delete');
    del.appendChild(delTxt);
    del.id='del';
    //Adding Edit
    var edit = document.createElement('button');
    var editTxt = document.createTextNode('Edit');
    edit.appendChild(editTxt);
    edit.id='edit';
    //Addig all into li tag
    total.appendChild(totalTxt);
    total.appendChild(del);
    total.appendChild(edit);
    //Adding li tag to the items
    items.appendChild(total);
    amt.value='';
    des.value='';
    choose.value='';
    console.log('Expense Added');
}

function delEditFunction(e){
    e.preventDefault();
    var parent = e.target.parentElement;
    //delete function
    if(e.target.id=='del'){
        console.log('delete button clicked');
        items.removeChild(parent);
    }
    //edit function
    else if(e.target.id=='edit'){
        console.log('edit button clicked');
        var values = parent.firstChild.nodeValue.split(' ');
        items.removeChild(parent);
        amt.value=values[0];
        des.value=values[1];
        choose.value=values[2];  
    }
    
}