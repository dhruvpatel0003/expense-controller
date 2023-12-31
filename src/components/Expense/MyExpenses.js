import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function MyExpenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const selectedYear = (year) => {
    setFilterYear(year);
  };

  const filterExpense = props.expenses.filter((myExpense) => {
    return myExpense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onYearSelection={selectedYear} />
        <ExpensesChart expenses={filterExpense} />
        <ExpensesList items={filterExpense} />
      </Card>
    </div>
    </li>
  );
}

export default MyExpenses;
