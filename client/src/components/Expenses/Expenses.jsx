import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filterList, setFilterList] = useState(null);

  const filterChangedHandler = (selectedDate) => {
    if (selectedDate.fromdate || selectedDate.todate) {
      let newFilteredExpense = props.expensesList.filter((expense) => {
        return (
          expense.date.toLocaleDateString("fr-ca") >= selectedDate.fromdate ||
          expense.date.toLocaleDateString <= selectedDate.todate
        );
      });
      setFilterList(newFilteredExpense);
    } else {
      setFilterList(null);
    }
  };

  const filteredExpenses = props.expensesList.filter((expense) => {
    return (
      expense.date.getFullYear().toString() ===
      new Date().getFullYear().toString()
    );
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangedHandler}
      />
      <ExpensesChart expenses={filterList || filteredExpenses} />
      <ExpensesList items={filterList || filteredExpenses} />
    </Card>
  );
}
