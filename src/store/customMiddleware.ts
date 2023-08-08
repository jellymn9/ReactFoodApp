import { fetchProducts } from "./products/products.middleware.async.actions";
import {
  ActionTypeT,
  GET_PRODUCTS,
  ActionWithPayload,
  ActionWithoutPayload,
} from "./actions.constants";

const loggerMiddleware =
  (storeAPI: any) =>
  (next: (action: ActionWithoutPayload | ActionWithPayload) => any) =>
  async (action: ActionWithoutPayload | ActionWithPayload) => {
    if (action.type === GET_PRODUCTS) {
      fetchProducts(next);
    }
    return next(action);
  };

export default loggerMiddleware;
