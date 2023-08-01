import { fetchProducts } from "./products/products.middleware.helper";
import ActionTypeT from "./actions.constants";
import ActionT from "redux";

const loggerMiddleware =
  (storeAPI: any) => (next) => async (action: ActionT.Action<ActionTypeT>) => {
    if (action.type === "GET_PRODUCTS") {
      fetchProducts(next);
    }
    return next(action);
  };

export default loggerMiddleware;
