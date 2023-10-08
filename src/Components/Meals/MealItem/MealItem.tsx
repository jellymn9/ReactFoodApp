import MealItemForm from "./MealItemForm";
import { MealItemWrapper } from "./MealItem.styled";
import { useDispatch } from "react-redux";
import { ItemT } from "../../../store/index";
import * as A from "../../../store/items/items.actions";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
  id: string;
}

const MealItem = function (props: MealItemProps) {
  const dispatch = useDispatch();

  // const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    dispatch(
      A.addItem({
        amount: amount,
        name: props.name,
        price: props.price,
        id: props.id,
      })
    );
  };

  return (
    <MealItemWrapper>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </MealItemWrapper>
  );
};

export default MealItem;
