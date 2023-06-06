import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      //new Date(yyyy, mm, dd) is method here month starts with 0
      date: new Date(2023, 11, 7),
    },
    {
      id: "e2",
      title: "Car",
      amount: 2940.67,
      date: new Date(2023, 3, 27),
    },
    {
      id: "e3",
      title: "Zara Shirt",
      amount: 294.67,
      date: new Date(2023, 4, 8),
    },
    {
      id: "e4",
      title: "Levis Jeans",
      amount: 294.67,
      date: new Date(2023, 7, 27),
    },
  ];

  
  const addExpenseHandler = (expense) =>{
    console.log('In App.js');
    console.log(expense);
  }

  // this type of code also works syntax is mention below
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Hello World"),
  //   React.createElement(Expenses, {expensesList:expenses})
  // );


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;

// returns jsx(javascript extensible markup language)
//react uses declarative approach
// return React.createElement("tag", {attributes of tag}, content between the tag, content between the tag, , , ...)
// React.createElement also uses the import React from 'react';
