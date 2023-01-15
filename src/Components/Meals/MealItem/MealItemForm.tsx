import Input from "../../UI/Input";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

const MealItemForm = function () {
  const [item, setItem] = useState({});
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    cartCtx.addItem()(item);
  }, [item]);

  // const submitHandler = (event: any) => {
  //   event.preventDefault();
  // };

  return (
    <form>
      <Input
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
          e.preventDefault();
          setItem({
            id: "m1",
            name: "Sushi",
            description: "Finest fish and veggies",
            price: 22.99,
            amount: 1,
          });
        }}
      >
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
