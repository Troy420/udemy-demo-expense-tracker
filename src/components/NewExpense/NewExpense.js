import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  console.log(props);
  const [buttonClicked, setButtonClicked] = useState("false");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // this is important! to add the newly added expenses to the array list
    props.onAddExpense(expenseData);
    setButtonClicked("false");
  };

  const openFormHandler = () => {
    setButtonClicked("true");
  };

  const closeFormHandler = () => {
    setButtonClicked("false");
  };

  let addNewExpenseButton = (
    <button onClick={openFormHandler}>Add New Expense</button>
  );
  if (buttonClicked === "true") {
    addNewExpenseButton = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={closeFormHandler}
      />
    );
  }

  return <div className="new-expense">{addNewExpenseButton}</div>;
};

export default NewExpense;
