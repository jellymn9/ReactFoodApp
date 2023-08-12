import { fetchProducts } from "./products/products.middleware.async.actions";
import { GET_PRODUCTS } from "./products/products.constants";
import { ActionTypeT } from "./actions.constants";

const loggerMiddleware =
  (storeAPI: any) =>
  (next: (action: ActionTypeT) => unknown) =>
  async (action: ActionTypeT) => {
    if (action.type === GET_PRODUCTS) {
      fetchProducts(next);
    }
    return next(action);
  };

export default loggerMiddleware;
