import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  // this export method doesn't work for arrow function
  // props is the object which hold all the value which is passed by another component
  // const [title, setTitle] = useState(props.title);

  // const changeTitleHandler = () => {
  //   setTitle("changed") //state updating function which call ExpenseItem function once again and change the title
  //   console.log(title)  // at first click the title will be old value cause react schedule the state update function
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.type==="credit" ? "+" : "-"}₹{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

// export default ExpenseItem;
