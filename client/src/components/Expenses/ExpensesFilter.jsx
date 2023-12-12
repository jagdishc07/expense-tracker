import React, { useState, useEffect } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [fromdate, setFromDate] = useState(null);
  const [todate, setToDate] = useState(null);

  useEffect(() => {
    props.onChangeFilter({
      fromdate: fromdate,
      todate: todate,
    });
  }, [fromdate, todate]);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label></label>
        <div className="expenses__filter-container">
          <div>
            <label htmlFor="">From</label>
            <input
              type="date"
              min="2023-06-01"
              max={new Date().toLocaleDateString("fr-ca")}
              value={fromdate || ""}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">To</label>
            <input
              type="date"
              min="2023-06-02"
              max={new Date().toLocaleDateString("fr-ca")}
              value={todate || ""}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;

//using key props is very important
