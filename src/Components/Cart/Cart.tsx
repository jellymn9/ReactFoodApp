import ReactDOM from "react-dom";
import { ModalCard } from "../UI/GlobalStyle.styled";

type cartItem = {
  id: string;
  name: string;
  amount: number;
  price: number;
};
interface CartTemplateProps {
  cartItems: cartItem[];
  isActive: boolean;
  handleClose: () => void;
}

const CartTemplate = function (props: CartTemplateProps) {
  return (
    <ModalCard isActive={props.isActive}>
      {props.cartItems &&
        props.cartItems.map((cartItem) => <li>{cartItem.name}</li>)}
      <div>
        <span>Total Amount</span>
        <span>35.7</span>
      </div>
      <div>
        <button onClick={() => props.handleClose()}>Close</button>
        <button>Order </button>
      </div>
    </ModalCard>
  );
};

const Cart = function (props: {
  isCartModalActive: boolean;
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
      {/* {ReactDOM.createPortal( */}
      {props.isCartModalActive && (
        <CartTemplate
          cartItems={cartItems}
          isActive={props.isCartModalActive}
          handleClose={props.handleClose}
        />
      )}

      {/* document.getElementById("modal-root") as HTMLElement
      )} */}
    </>
  );
};

export default Cart;
