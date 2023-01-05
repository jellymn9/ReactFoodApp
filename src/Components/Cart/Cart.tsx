import ReactDOM from "react-dom";

const Cart = function () {
  const cartItems = [
    {
      id: "a1",
      name: "Sushi",
      amount: 2,
      price: 33.2,
    },
  ];

  return (
    <>
      {ReactDOM.createPortal(
        <div>
          {cartItems && cartItems.map((cartItem) => <li>{cartItem.name}</li>)}
          <div>
            <span>Total Amount</span>
            <span>35.7</span>
          </div>
          <div>
            <button>Close</button>
            <button>Order </button>
          </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Cart;
