import ReactDOM from "react-dom";
import { ModalCard, Backdrop } from "../UI/GlobalStyle.styled";

type cartItem = {
  id: string;
  name: string;
  amount: number;
  price: number;
};
interface CartTemplateProps {
  cartItems: cartItem[];
  handleClose: () => void;
}

const CartTemplate = function (props: CartTemplateProps) {
  return (
    <ModalCard>
      {props.cartItems &&
        props.cartItems.map((cartItem) => <li>{cartItem.name}</li>)}
      <div>
        <span>Total Amount</span>
        <span>35.7</span>
      </div>
      <div>
        <button onClick={(e) => props.handleClose()}>Close</button>
        <button>Order </button>
      </div>
    </ModalCard>
  );
};

const Cart = function (props: {
  handleClose: () => void;
}) {
  const cartItems: cartItem[] = [
    {
      id: "a1",
      name: "Sushi",
      amount: 2,
      price: 33.2,
    },
  ];

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={() => props.handleClose()}/>, document.getElementById("backdrop-root") as HTMLElement)}
      {ReactDOM.createPortal(
        <CartTemplate
          cartItems={cartItems}
          handleClose={props.handleClose}
        />,document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Cart;
