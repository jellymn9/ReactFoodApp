import { legacy_createStore as createStore, applyMiddleware } from "redux"; // use reduxToolKit later
import { getProducts } from "../services/products.service";

import reducers from "./reducers";

export type ItemT = { id: string; name: string; amount: number; price: number };

export interface StateI {
  products: Array<any>;
  items: Array<ItemT>;
  totalAmount: number;
}

const defaultCartState: StateI = {
  products: [],
  items: [],
  totalAmount: 0, // add reducer for this too
};

// const counterReducer = (
//   state = defaultCartState,
//   action: { type: string; data: any }
// ) => {
//   if (action.type === "ADD") {
//     let updatedItems = [...state.items];
//     const indexOfExsistingItem = state.items.findIndex((item: any) => {
//       return item.id === action.data.id;
//     });
//     if (indexOfExsistingItem >= 0) {
//       updatedItems[indexOfExsistingItem] = {
//         ...state.items[indexOfExsistingItem],
//         amount: state.items[indexOfExsistingItem].amount + 1,
//       };
//     } else {
//       updatedItems = [...state.items, action.data];
//     }
//     const updatedTotalAmount =
//       state.totalAmount + action.data.price * action.data.amount;
//     return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
//   } else if (action.type === "REMOVE") {
//     let updatedItems = [...state.items];
//     const indexOfExsistingItem = state.items.findIndex((item: any) => {
//       return item.id === action.data.id;
//     });
//     if (indexOfExsistingItem >= 0) {
//       const itemAmount = updatedItems[indexOfExsistingItem].amount;
//       if (itemAmount > 1) {
//         updatedItems[indexOfExsistingItem].amount -= 1;
//       } else {
//         updatedItems = updatedItems.filter(
//           (item) => item.id !== action.data.id
//         );
//       }
//       const updatedTotalAmount =
//         state.totalAmount - action.data.price * action.data.amount;
//       return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };
//     }
//     return defaultCartState;
//   } else if (action.type === "GET_PRODUCTS") {
//   }
//   return defaultCartState;
// };

const loggerMiddleware =
  (storeAPI: any) => (next: any) => async (action: any) => {
    console.log("dispatching", action);
    if (action.type === "GET_PRODUCTS") {
      console.log("!!!!!!!");
      const products = await getProducts();
      // storeAPI.dispatch({ type: "GET_PRODUCTS_SUCCESS", data: products });
      // OR
      return next({ type: "GET_PRODUCTS_SUCCESS", data: products });
    }
    return next(action);
  };
const middlewareEnhancer = applyMiddleware(loggerMiddleware);
const store = createStore(reducers, middlewareEnhancer);

export type StateType = ReturnType<typeof store.getState>;

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log("latestState: ", latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment", data: [] });

export default store;
