import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler} />
      <ExpenseItem
        title={props.expensesList[0].title}
        amount={props.expensesList[0].amount}
        date={props.expensesList[0].date}
      />
      <ExpenseItem
        title={props.expensesList[1].title}
        amount={props.expensesList[1].amount}
        date={props.expensesList[1].date}
      />
      <ExpenseItem
        title={props.expensesList[2].title}
        amount={props.expensesList[2].amount}
        date={props.expensesList[2].date}
      />
      <ExpenseItem
        title={props.expensesList[3].title}
        amount={props.expensesList[3].amount}
        date={props.expensesList[3].date}
      />
    </Card>
  );
}
