import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Car",
    amount: 8000,
    date: new Date(2020, 7, 23),
  },
  {
    id: "e2",
    title: "Airline",
    amount: 80000,
    date: new Date(2023, 9, 8),
  },
  {
    id: "e3",
    title: "Bike",
    amount: 10,
    date: new Date(2022, 1, 31),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses)
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevState) => [expense , ...prevState]);
  } 

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;

