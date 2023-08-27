import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenseslist = props.items.sort((a, b) => b.date - a.date);
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenseslist.map((list) => (
        <ExpenseItem
          key={list._id}
          title={list.title}
          amount={list.amount}
          date={list.date}
          type={list.type}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
