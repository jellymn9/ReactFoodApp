import { legacy_createStore as createStore, applyMiddleware } from "redux"; // use reduxToolKit later
import loggerMiddleware from "./customMiddleware";

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

const middlewareEnhancer = applyMiddleware(loggerMiddleware);
const store = createStore(reducers, middlewareEnhancer);

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch; // to be deleted

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log("latestState: ", latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment", data: [] });

export default store;
