import React, {useState} from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  //console.log(props.items);

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense)=>expense.date.getFullYear().toString()===filteredYear);
  //console.log(filteredExpense);




  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpense}/>
    </Card>
  );
}

export default Expenses;
