import React from "react";

interface CartStore {
  items: { amount: number }[];
  totalAmount: number;
  addItem: () => any;
  removeItem: (id: number) => any;
}

const CartContext = React.createContext<CartStore>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id: number) => {},
});

export default CartContext;
