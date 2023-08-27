import React, { useState } from "react";
import "./ExpenseForm.css";
import { newExpense } from "../../api/api.js";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const creditHandler = () => {
    setCredit(true);
  }; 

  const debithandler = () => {
    setDebit(true);
  };

  const submitHandler = async (event) => {
    event.preventDefault(); // this will not reload the page
    let expenseData = {}
    if(credit){
      expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
        type: "credit"
      };
    }
    if(debit){
      expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
        type: "debit"
      };
    }
    await newExpense(expenseData); // this will send data to server
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setCredit(false);
    setDebit(false);
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-06-01"
            max={new Date().toLocaleDateString("fr-ca")}
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={()=>creditHandler()}>Credit</button>
        <button type="submit" onClick={()=>debithandler()}>Debit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//try to console.log(e) it will return object will target element and inside it we can get value element.
