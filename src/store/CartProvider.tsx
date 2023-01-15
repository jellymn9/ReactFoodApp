import CartContext from "./cart-context";
import React from "react";
import { useReducer } from "react";

type actionTypeTypes = "ADD" | "REMOVE";

interface actionType {
  type: actionTypeTypes;
  data: any; // change to something else
}

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: any, action: actionType) => {
  if (action.type === "ADD") {
    const updatedItems = [...state.items, action.data];
    const updatedTotalAmount =
      state.totalAmount + action.data.price * action.data.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props: any) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: any) => {
    dispatchCartAction({ type: "ADD", data: item });
  };

  const removeItemFromCartHandler = (id: any) => {
    dispatchCartAction({ type: "REMOVE", data: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: () => addItemToCartHandler,
    removeItem: () => removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
