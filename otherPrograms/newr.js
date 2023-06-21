var form = document.getElementById('form');
var price = document.getElementById('price');
var item = document.getElementById('item');
var table = document.getElementById('table');


form.addEventListener('click',addOrder);




async function addOrder(e){
    e.preventDefault();

    if(e.target.id ==="submit"){
    const obj = {};
    obj['price']=price.value;
    obj['item']=item.value;
    obj['table']=table.value;

    addOrderToTable(obj);
    try{
    let res = await axios.post('https://crudcrud.com/api/da88e38b1203469da28cbae8ea42d1ff/orders',obj);
    console.log('data added to crud');
    }
    catch(err){
        console.log(err);
    }
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
        try{
        let response = await axios.get('https://crudcrud.com/api/da88e38b1203469da28cbae8ea42d1ff/orders');
        for(var i=0;i<response.data.length;i++){
            if(response.data[i].price === data[0] & response.data[i].item === data[1] & response.data[i].table === tableData){
             
                var id = response.data[i]._id;
                let re = await axios.delete(`https://crudcrud.com/api/da88e38b1203469da28cbae8ea42d1ff/orders/${id}`);
                break;            
            }
            }
        
        console.log('order Deleted on page');
        }
        catch(e)
        {console.log(e)};
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


window.addEventListener('DOMContentLoaded',addelements );


async function addelements(){
    try{
    let response = await axios.get('https://crudcrud.com/api/da88e38b1203469da28cbae8ea42d1ff/orders');
    response.data.forEach(element => addOrderToTable(element));
    }
    catch(err){
        console.log(err)}
}