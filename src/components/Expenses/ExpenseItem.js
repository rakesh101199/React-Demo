import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('updated');
    console.log(' title clicked');
  }

  const amountHandler = () => {
    setAmount(100);
    console.log('expense clicked');

  }
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}rs</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
      <button onClick={amountHandler}>Change Expense</button>
    </Card>
  );
}


export default ExpenseItem;
