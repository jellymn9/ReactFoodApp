import { combineReducers } from "redux";
import items from "./items/items.reducer";
import products from "./products/products.reducer";
import totalAmount from "./totalAmount/totalAmount.reducer";
import auth from "./auth/auth.reducer";

export default combineReducers({
  products,
  items,
  totalAmount,
  auth,
});
