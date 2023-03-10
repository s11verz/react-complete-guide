import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../card/Card";
import "../../css/Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterDataHandler = (changedFilterData) => {
    setFilteredYear(changedFilterData);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilterData={changeFilterDataHandler}
      ></ExpensesFilter>
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </Card>
  );
};

export default Expenses;
