import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2019");
  const onYeahSelectHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onYearSelected={onYeahSelectHandler}
        />
        <ExpenseItem
          title={props.list[0].title}
          amount={props.list[0].amount}
          date={props.list[0].date}
        />
        <ExpenseItem
          title={props.list[1].title}
          amount={props.list[1].amount}
          date={props.list[1].date}
        />
        <ExpenseItem
          title={props.list[2].title}
          amount={props.list[2].amount}
          date={props.list[2].date}
        />
        <ExpenseItem
          title={props.list[3].title}
          amount={props.list[3].amount}
          date={props.list[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
