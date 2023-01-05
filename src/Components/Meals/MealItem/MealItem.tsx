import MealItemForm from "./MealItemForm";
import { MealItemWrapper } from "./MealItem.styled";

interface MealItemProps {
  name: string;
  description: string;
  price: number;
}

const MealItem = function (props: MealItemProps) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <MealItemWrapper>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </MealItemWrapper>
  );
};

export default MealItem;
