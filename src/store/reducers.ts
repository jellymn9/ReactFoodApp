import { combineReducers } from "redux";
import items from "./items/items.reducer";
import products from "./products/products.reducer";
import totalAmount from "./totalAmount/totalAmount.reducer";

export default combineReducers({
  products,
  items,
  totalAmount,
});
