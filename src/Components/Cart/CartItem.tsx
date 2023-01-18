import React from "react";
import { Offset } from "../UI/GlobalStyle.styled";

const CartItem = (props: any) => {
  const price = `$${props.price}`;

  return (
    <li>
      <div></div>
      <h2>{props.name}</h2>
      <div>
        <span>{price}</span>
        <span style={{ marginLeft: "20px" }}>Amount: {props.amount}</span>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={() => props.addItem()}>+</button>
      </div>
      <Offset />
    </li>
  );
};

export default CartItem;
