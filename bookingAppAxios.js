var form = document.getElementById('my-form');
var users = document.getElementById('users');
//users.addEventListener('click',delFunction);

form.addEventListener('submit',onSubmit);

function delFunction(e){
    e.preventDefault();
    //deleting the user
    if(e.target.id === 'dele'){
        var par=e.target.parentElement;
        users.removeChild(par);
    }
    //editing the user.
    else if(e.target.id === 'edit'){
        var paren = e.target.parentElement;
        var txt = paren.firstChild.nodeValue.split(' ');
        console.log('inthe edit function')
        console.log(txt);
        var email = document.getElementById('email');
        var name = document.getElementById('name');
        name.value = txt[0];
        email.value = txt[1];
        users.removeChild(paren);
    }

}


// storing all the users data

function onSubmit(e){
    const myObj ={};
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    e.preventDefault();

    myObj[name.value]=email.value;

    axios.post("https://crudcrud.com/api/271e1cd6962c4a5ca8e7ee5bd68cade6/bookingApp",myObj)
    .then( response =>{
     // if the post is sucessfull then adding delete and edit buttons.
    var userBtn = document.createElement('li');
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.style.background='red';
    deleteBtn.style.marginLeft='100px';
    deleteBtn.id='dele';
    var editBtn = document.createElement('li');
    var editBtn = document.createElement('button');
    editBtn.appendChild(document.createTextNode('edit'));
    editBtn.style.background='orange';
    editBtn.style.marginLeft='10px';
    editBtn.id='edit';

    var text = document.createTextNode(name.value +' '+ email.value);
    userBtn.appendChild(text);
    userBtn.appendChild(deleteBtn);
    userBtn.appendChild(editBtn);
    users.appendChild(userBtn);


    name.value='';
    email.value='';


    }).catch(err=>console.log(err));
}
