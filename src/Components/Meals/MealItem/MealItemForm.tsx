import Input from "../../UI/Input";
import Cart from "../../Cart/Cart";
import { useState } from "react";

const MealItemForm = function () {
  const [isCartModalActive, setCartModalActive] = useState(false);

  const handleCloseCart = () => {
    console.log("uuuuu I wanna touch the sky");
    setCartModalActive(false);
    console.log("isCartModalActive:", isCartModalActive);
  };
  console.log("onRender:", isCartModalActive);
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
        onClick={(event) => {
          setCartModalActive(true);
          event.preventDefault();
        }}
      >
        + Add
      </button>
      <Cart
        isCartModalActive={isCartModalActive}
        handleClose={handleCloseCart}
      />
    </form>
  );
};

export default MealItemForm;
