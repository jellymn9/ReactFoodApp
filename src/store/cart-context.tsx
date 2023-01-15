import React from "react";

interface CartStore {
  items: { id: string; name: string; amount: number; price: number }[];
  totalAmount: number;
  addItem?: any;
  removeItem?: any;
}

const CartContext = React.createContext<CartStore>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: (id: number) => {},
});

export default CartContext;
