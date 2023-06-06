import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredInput, setEnteredInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //multi state approach
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredTitle: e.target.value,
    // });  some time this method might fail react might return outdated state

    // setEnteredInput((prevState)=>{
    //   return {...prevState, enteredTitle: e.target.value};
    // })

    setEnteredTitle(e.target.value)
  };

  const amountChangeHandler = (e) => {
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredAmount: e.target.value,
    // });
    setEnteredAmount(e.target.value);

  };

  const dateChangeHandler = (e) => {
    // setEnteredInput({
    //   ...enteredInput,
    //   enteredDate: e.target.value,
    // });
    setEnteredDate(e.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault(); // this will not reload the page

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
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
            min="2019-01-01"
            max={new Date().toLocaleDateString("fr-ca")}
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//try to console.log(e) it will return object will target element and inside it we can get value element.
