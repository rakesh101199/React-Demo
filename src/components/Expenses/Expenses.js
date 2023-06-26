import React, {useState} from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

  //console.log(props.items);

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense)=>expense.date.getFullYear().toString()===filteredYear);
  console.log(filteredExpense);

  let expenseContent = <p>No Expenses Found</p>;

  if(filteredExpense.length >0){
    expenseContent=filteredExpense.map((expense) =>(
      <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
    ));      
  }


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpense.length === 1 && <p>Only single Expense here. Please add more...</p>}
      {expenseContent}
    </Card>
  );
}

export default Expenses;
