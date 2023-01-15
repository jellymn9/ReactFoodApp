import MealItemForm from "./MealItemForm";
import { MealItemWrapper } from "./MealItem.styled";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
  id: string;
}

const MealItem = function (props: MealItemProps) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      amount: amount,
      name: props.name,
      price: props.price,
      id: props.id,
    });
  };

  return (
    <MealItemWrapper>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </MealItemWrapper>
  );
};

export default MealItem;
