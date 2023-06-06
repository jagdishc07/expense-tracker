import React from "react";
import Expenses from "./components/Expenses";

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
  return (
    // returns jsx(javascript extensible markup language)
    <div>
      <Expenses expensesList={expenses}/>
    </div>
  );
};

export default App;

//react uses declarative approach
