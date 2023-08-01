import { fetchProducts } from "./products/products.middleware.async.actions";
import { ActionTypeT, GET_PRODUCTS } from "./actions.constants";
import ActionT from "redux";

const loggerMiddleware =
  (storeAPI: any) =>
  (next: (action: { type: ActionTypeT; data: any }) => any) =>
  async (action: { type: ActionTypeT; data: any }) => {
    if (action.type === GET_PRODUCTS) {
      fetchProducts(next);
    }
    return next(action);
  };

export default loggerMiddleware;
