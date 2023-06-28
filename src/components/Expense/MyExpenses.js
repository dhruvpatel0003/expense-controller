import ExpenseItem from "./Expenseitem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

function MyExpenses(props) {

  const [filterYear, setFilterYear] = useState('2020');

  const selectedYear = (year)=>{
    setFilterYear(year);
    // console.log(year);
  };

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onYearSelection={selectedYear}/>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
      </Card>
    </div>
  );
}

export default MyExpenses;
