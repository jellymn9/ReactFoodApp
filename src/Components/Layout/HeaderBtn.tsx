import { useSelector } from "react-redux";

import { StateI, ItemT } from "src/store";
import CartIcon from "src/components/Cart/CartIcon";
import { CartBtn } from "./Header.styled";

const HeaderBtn = function (props: { handleOpen: () => void }) {
  const items = useSelector<StateI, ItemT[]>((state) => state.items);
  const numberOfCartItems = items.reduce((curNumber: number, item) => {
    console.log(item.amount);
    return curNumber + (item.amount ? item.amount : 0);
  }, 0);

  return (
    <CartBtn onClick={() => props.handleOpen()}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span> {numberOfCartItems}</span>
    </CartBtn>
  );
};

export default HeaderBtn;
