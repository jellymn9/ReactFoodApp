import ReactDOM from "react-dom";
import { ModalCard, Backdrop } from "../UI/GlobalStyle.styled";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { StateI, ItemT } from "../../store/index";
interface CartTemplateProps {
  cartItems: ItemT[];
  totalAmount: number;
  handleClose: () => void;
  add: (i: ItemT) => void;
  remove: (i: ItemT) => void;
}

const CartTemplate = function (props: CartTemplateProps) {
  return (
    <ModalCard>
      {props.cartItems &&
        props.cartItems.map((cartItem) => (
          <CartItem
            {...cartItem}
            key={cartItem.id}
            addItem={props.add.bind(null, cartItem)}
            onRemove={props.remove.bind(null, cartItem)}
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
  const dispatch = useDispatch();
  const items = useSelector<StateI, ItemT[]>((state) => state.items);
  const totalAmount = useSelector<StateI, number>((state) => state.totalAmount);

  const addItem = (item: ItemT) => {
    dispatch<{ type: "ADD"; data: ItemT }>({ type: "ADD", data: item });
  };

  const removeItem = (item: ItemT) => {
    dispatch<{ type: "REMOVE"; data: ItemT }>({ type: "REMOVE", data: item });
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => props.handleClose()} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <CartTemplate
          cartItems={items}
          totalAmount={totalAmount}
          handleClose={props.handleClose}
          add={addItem}
          remove={removeItem}
        />,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Cart;
