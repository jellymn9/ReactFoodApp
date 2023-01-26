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
    let updatedItems = [...state.items];
    const indexOfExsistingItem = state.items.findIndex((item: any) => {
      return item.id === action.data.id;
    });
    if (indexOfExsistingItem >= 0) {
      updatedItems[indexOfExsistingItem] = {
        ...state.items[indexOfExsistingItem],
        amount: state.items[indexOfExsistingItem].amount + 1,
      };
    } else {
      updatedItems = [...state.items, action.data];
    }
    const updatedTotalAmount =
      state.totalAmount + action.data.price * action.data.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE") {
    let updatedItems = [...state.items];
    const indexOfExsistingItem = state.items.findIndex((item: any) => {
      return item.id === action.data.id;
    });
    if (indexOfExsistingItem >= 0) {
      const itemAmount = updatedItems[indexOfExsistingItem].amount;
      if (itemAmount > 1) {
        updatedItems[indexOfExsistingItem].amount -= 1;
      } else {
        updatedItems = updatedItems.filter(
          (item) => item.id !== action.data.id
        );
      }
      const updatedTotalAmount =
        state.totalAmount - action.data.price * action.data.amount;
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
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
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
