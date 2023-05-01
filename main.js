var form = document.getElementById('my-form');
var users = document.getElementById('users');
users.addEventListener('click',delFunction);

form.addEventListener('submit',onSubmit);
//deleting the user
function delFunction(e){
    e.preventDefault();
    if(e.target.id === 'dele'){
        var par=e.target.parentElement;
        users.removeChild(par);
    }

}





// storing all the users data
const myObj ={};
function onSubmit(e){
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    e.preventDefault();

    myObj[name.value]=email.value;
    var myobj_se = JSON.stringify(myObj);
    localStorage.setItem('myobj',myobj_se);
    var myObj_de=JSON.parse(localStorage.getItem('myobj'));
    console.log(myObj_de);
     
    var userBtn = document.createElement('li');
    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));
    deleteBtn.style.background='red';
    deleteBtn.style.marginLeft='100px';
    deleteBtn.id='dele';


    var text = document.createTextNode(''+name.value +'  '+ email.value);
    userBtn.appendChild(text);
    userBtn.appendChild(deleteBtn);
    users.appendChild(userBtn);


    name.value='';
    email.value='';
}
