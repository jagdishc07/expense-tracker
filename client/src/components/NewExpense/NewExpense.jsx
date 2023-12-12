import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // console.log(enteredExpenseData)
    const expenseData = {
      ...enteredExpenseData,
      _id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}


// we can get data from child component to parent by passing props to child component
// and create a function to store the data to parent component