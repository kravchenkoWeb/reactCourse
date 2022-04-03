import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isFormShown, setIsFormShown] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (evt) => {
    setAmount(evt.target.value);
    // If need set state depending on previous
    // setAmount(prevState => prevState);
  };

  const dateChangedHandler = (evt) => {
    setDate(evt.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(data);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const showHandler = (isShown) => {
    setIsFormShown(isShown);
  };

  if (!isFormShown) {
    return (
      <div style={{ textAlign: "center" }}>
        <button type="button" onClick={() => showHandler(true)}>
          Add Expense
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={title} onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={amountChangedHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            onChange={dateChangedHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => showHandler(false)}>
          Cancel
        </button>
        <button type="submit">New Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
