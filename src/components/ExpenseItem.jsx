import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

export default function ExpenseItem(props) {
  // this export method doesn't work for arrow function
  // props is the object which hold all the value which is passed by another component

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

// export default ExpenseItem;

// can't render expenseDate directly to browser cause its an object
// so .toISOString method can be used for all date
