import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(
    props.list.filter(
      (expense) => expense.date.getFullYear().toString() === year
    )
  );

  const onYeahSelectHandler = (selectedYear) => {
    setYear(selectedYear);
    setFilteredExpenses(
      props.list.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      )
    );
  };

  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={year}
          onYearSelected={onYeahSelectHandler}
        />
        {filteredExpenses.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
