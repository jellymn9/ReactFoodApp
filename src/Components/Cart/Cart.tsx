import ReactDOM from "react-dom";
import { ModalCard, Backdrop } from "../UI/GlobalStyle.styled";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useContext } from "react";

type cartItem = {
  id: string;
  name: string;
  amount: number;
  price: number;
};
interface CartTemplateProps {
  cartItems: cartItem[];
  totalAmount: number;
  handleClose: () => void;
  add: (i: cartItem) => {};
}

const CartTemplate = function (props: CartTemplateProps) {
  return (
    <ModalCard>
      {props.cartItems &&
        props.cartItems.map((cartItem) => (
          <CartItem
            {...cartItem}
            key={cartItem.id}
            addItem={() => props.add(cartItem)}
          />
        ))}
      <div>
        <span>Total Amount</span>
        <span>{`$${props.totalAmount.toFixed()}`}</span>
      </div>
      <div>
        <button onClick={(e) => props.handleClose()}>Close</button>
        {props.cartItems.length && <button>Order </button>}
      </div>
    </ModalCard>
  );
};

const Cart = function (props: { handleClose: () => void }) {
  const cartCtx = useContext(CartContext);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => props.handleClose()} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <CartTemplate
          cartItems={cartCtx.items}
          totalAmount={cartCtx.totalAmount}
          handleClose={props.handleClose}
          add={cartCtx.addItem}
        />,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Cart;
