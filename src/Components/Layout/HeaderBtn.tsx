import CartIcon from "../Cart/CartIcon";
import { CartBtn } from "../Layout/Header.styled";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderBtn = function (props: { handleOpen: () => void }) {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber: number, item) => {
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
