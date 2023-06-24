import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){

    const saveExpenseDataHandler = expenseData =>{

        const expense={
            ...expenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expense);
        //console.log(expenseData, 'in NewE');
    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
}


export default NewExpense;