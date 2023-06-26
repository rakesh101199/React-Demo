import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = expenseData =>{

        const expense={
            id : Math.random().toString(),
            ...expenseData            
        };
        props.onAddExpense(expense);
        //console.log(expenseData, 'in NewE');
        setIsEditing(false);
    };
    const formHandler = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler = ()=>{
        //console.log('cancel clicked');
        setIsEditing(false);
    };
    return <div className='new-expense'>
        {!isEditing && <button onClick={formHandler} >Add Expense</button>}
        { isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
}


export default NewExpense;