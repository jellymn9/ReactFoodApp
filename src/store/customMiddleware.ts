import { fetchProducts } from "./products/products.middleware.async.actions";
import { GET_PRODUCTS } from "./actions.constants";

const loggerMiddleware =
  (storeAPI: any) => (next: (action: any) => any) => async (action: any) => {
    if (action.type === GET_PRODUCTS) {
      fetchProducts(next);
    }
    return next(action);
  };

export default loggerMiddleware;
