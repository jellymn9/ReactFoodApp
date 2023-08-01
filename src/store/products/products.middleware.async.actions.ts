import { getProducts } from "../../services/products.service";
import { ActionTypeT, GET_PRODUCTS_SUCCESS } from "../actions.constants";

async function fetchProducts(
  nextFunction: (action: { type: ActionTypeT; data: any }) => any
) {
  const products = await getProducts();
  return nextFunction({ type: GET_PRODUCTS_SUCCESS, data: products });
  // include Failure action too
}

export { fetchProducts };
