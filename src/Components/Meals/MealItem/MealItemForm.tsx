import Input from "../../UI/Input";
import { useState } from "react";
import { useRef } from "react";

const MealItemForm = function (props: any) {
  // const [item, setItem] = useState({});
  // const cartCtx = useContext(CartContext);
  // useEffect(() => {
  //   cartCtx.addItem()(item);
  // }, [item]);

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
      <button
        onClick={(e) => {
          // setItem({
          //   id: "m1",
          //   name: "Sushi",
          //   description: "Finest fish and veggies",
          //   price: 22.99,
          //   amount: 1,
          // });
        }}
      >
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
