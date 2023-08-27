import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  // const dropdownChangeHandler = (e) => {
  //   props.onChangeFilter(e.target.value);
  // };


  // code to start a dropdown list from current year
  // let currentYear = new Date().getFullYear();
  // let year = Array.from({length: currentYear - 2021}, (_, index) => currentYear - index);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label></label>
        {/* <select value={props.selected} onChange={dropdownChangeHandler}>
          {year.map(year=>
            <option key={year} value={year}>{year}</option>
            )}
        </select> */}
        <div className="expenses__filter-container">
          <div>
            <label htmlFor="">From</label>
            <input type="date"
              min="2023-06-01"
              max={new Date().toLocaleDateString("fr-ca")}
              // value={enteredDate}
              // onChange={dateChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="">To</label>
            <input type="date"
              min="2023-06-02"
              max={new Date().toLocaleDateString("fr-ca")}
              // value={enteredDate}
              // onChange={dateChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;

//using key props is very important
