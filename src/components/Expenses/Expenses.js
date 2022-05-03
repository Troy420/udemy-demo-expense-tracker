import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const saveFilterYear = (year) => {
    console.log(year);
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSaveFilterYear={saveFilterYear} selected={year} />
      <ExpenseItem
        title={props.expensesData[0].title}
        amount={props.expensesData[0].amount}
        date={props.expensesData[0].date}
      />
      <ExpenseItem
        title={props.expensesData[1].title}
        amount={props.expensesData[1].amount}
        date={props.expensesData[1].date}
      />
      <ExpenseItem
        title={props.expensesData[2].title}
        amount={props.expensesData[2].amount}
        date={props.expensesData[2].date}
      />
      <ExpenseItem
        title={props.expensesData[3].title}
        amount={props.expensesData[3].amount}
        date={props.expensesData[3].date}
      />
    </Card>
  );
};

export default Expenses;
