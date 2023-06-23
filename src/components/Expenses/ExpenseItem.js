import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {

  const clickHandler = () => {
    console.log('deleted');
  }
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}rs</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
}


export default ExpenseItem;
