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
  }
  return (
    <Card className="show__balance">
      <div className="show__balance-savings">
        <label htmlFor="">
          Available Balance:{" "}
          <span className="show_balance_nums"> ₹{balance}</span>
        </label>
      </div>
      <div className="show__balance-income">
        <label htmlFor="">
          Total Income:{" "}
          <span className="show_balance_nums"> ₹{totalIncome}</span>
        </label>
      </div>
      <div className="show__balance-expense">
        <label htmlFor="">
          Total Expense:{" "}
          <span className="show_balance_nums"> ₹{totalExpense}</span>
        </label>
      </div>
    </Card>
  );
};

export default ShowBalance;
