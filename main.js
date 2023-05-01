var form = document.getElementById('my-form');

form.addEventListener('submit',onSubmit);


function onSubmit(e){
    var email = document.getElementById('email');
    var name = document.getElementById('name');
    e.preventDefault();
    localStorage.setItem(name.value,email.value);
    name.value='';
    email.value='';


}