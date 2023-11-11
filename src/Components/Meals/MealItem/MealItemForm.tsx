import { useState, useRef } from "react";

import Input from "src/components/UI/Input";

const MealItemForm = function (props: any) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef: any = useRef();

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current?.value; // this value is always a string
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button onClick={(e) => {}}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
