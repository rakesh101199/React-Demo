var form = document.getElementById('my-form');

form.addEventListener('submit',onSubmit);
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
    name.value='';
    email.value='';


}