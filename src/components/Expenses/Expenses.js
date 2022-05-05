import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const saveFilterYear = (yearFromExpenseFilter) => {
    setYear(yearFromExpenseFilter);
  };

  // .filter method returns an array
  const filteredByYear = props.expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveFilterYear={saveFilterYear} defaultYear={year} />
      <ExpensesChart expenses={filteredByYear} />
      <ExpensesList items={filteredByYear} />
    </Card>
  );
};

export default Expenses;
