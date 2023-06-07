import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  // code to start a dropdown list from current year
  let currentYear = new Date().getFullYear();
  let year = Array.from({length: currentYear - 2019}, (_, index) => currentYear - index);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {year.map(year=>
            <option key={year} value={year}>{year}</option>
            )}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

//using key props is very important
