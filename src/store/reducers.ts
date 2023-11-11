import { combineReducers } from "redux";

import items from "src/store/items/items.reducer";
import products from "src/store/products/products.reducer";
import totalAmount from "src/store/totalAmount/totalAmount.reducer";
import auth from "src/store/auth/auth.reducer";

export default combineReducers({
  products,
  items,
  totalAmount,
  auth,
});
