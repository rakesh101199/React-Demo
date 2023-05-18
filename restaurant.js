var form = document.getElementById('form');
var price = document.getElementById('price');
var item = document.getElementById('item');
var table = document.getElementById('table');


form.addEventListener('click',addOrder);




function addOrder(e){
    e.preventDefault();

    if(e.target.id ==="submit"){
    const obj = {};
    obj['price']=price.value;
    obj['item']=item.value;
    obj['table']=table.value;

    addOrderToTable(obj);
    axios.post('https://crudcrud.com/api/b111a668746b4119a39b6b28563049f2/orders',obj)
    .then(response => console.log('data added to crud'))
    .catch(err => console.log(err));
    price.value="";
    item.value="";
    table.value='table1';
    }
    else if(e.target.id==='delete'){
        var liParent = e.target.parentElement;
        var data = liParent.firstChild.nodeValue.split('-');
        var tableData = liParent.parentElement.id;
        console.log(data);

        var tableItems = document.getElementById(`${tableData}`);
        tableItems.removeChild(liParent);

        axios.get('https://crudcrud.com/api/b111a668746b4119a39b6b28563049f2/orders')
        .then(response => {
            for(var i=0;i<response.data.length;i++){
            if(response.data[i].price === data[0] & response.data[i].item === data[1] & response.data[i].table === tableData){
             
                var id = response.data[i]._id;
                axios.delete(`https://crudcrud.com/api/b111a668746b4119a39b6b28563049f2/orders/${id}`)
                .then(re => console.log('order deleted in database'))
                .catch(err => console.log(err));
                break;            
            }
            }
       
        })
        .catch(err => console.log(err));
        console.log('order Deleted on page');
    }

}



function addOrderToTable(obj){
    var tableNo = document.getElementById(`${obj.table}`);
    var orderBtn = document.createElement('li');
    var order = obj['price']+'-'+obj['item']; 
    var orderData = document.createTextNode(order);
    var deleteBtn = document.createElement('button');
    var del = document.createTextNode('Delete Order');
    deleteBtn.appendChild(del);
    deleteBtn.id ='delete';
    orderBtn.appendChild(orderData);
    orderBtn.appendChild(deleteBtn);
    tableNo.appendChild(orderBtn);
    console.log('added order');

}


window.addEventListener('DOMContentLoaded',() => {

    axios.get('https://crudcrud.com/api/b111a668746b4119a39b6b28563049f2/orders')
    .then(response => {
        response.data.forEach(element => addOrderToTable(element))       
        })
    .catch(err => console.log(err));
});