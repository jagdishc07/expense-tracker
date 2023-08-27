import React from "react";
import "./ShowBalance.css";
import Card from "../UI/Card";

const ShowBalance = (props) => {
  let totalIncome;
  let totalExpense;
  let balance;
  if (props.expensesList.length > 0) {
    const expensesList = props.expensesList;
    const income = expensesList.filter((list) => list.type === "credit");
    const expense = expensesList.filter((list) => list.type === "debit");
    totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);
    totalExpense = expense.reduce((acc, curr) => acc + curr.amount, 0);
    balance = totalIncome - totalExpense;
    console.log("Available Balance: ", balance);
    console.log("Total Income: ", totalIncome);
    console.log("Total Expense: ", totalExpense);
  }
  return (
    <Card className="show__balance">
      <div className="show__balance-savings">
        <label htmlFor="">
          Available Balance: {balance}
        </label>
      </div>
      <div className="show__balance-income">
        <label htmlFor="">
          Total Income: {totalIncome}
        </label>
      </div>
      <div className="show__balance-expense">
        <label htmlFor="">
          Total Expense: {totalExpense}
        </label>
      </div>
    </Card>
  );
};

export default ShowBalance;
