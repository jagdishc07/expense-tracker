import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ShowBalance from "./components/Balance/ShowBalance";
import { getExpenses } from "./api/api";

const dummyExpenses = [];

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses)
  
  const addExpenseHandler = (expense) =>{
    console.log(expense)
    setExpenses((prevState) => [expense , ...prevState]);
  }
  
  React.useEffect(() => {
    const fetchExpenses = async ()=>{
      let expensesdata = await getExpenses();
      expensesdata.data.map((expense)=>{
        let expenseDate = new Date(expense.date);
        expense.date = expenseDate;
      })
      setExpenses(expensesdata.data);
    }
    fetchExpenses();
  }, [] );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ShowBalance expensesList={expenses}/>
      <Expenses expensesList={expenses} />
    </div>
  );
};

export default App;

