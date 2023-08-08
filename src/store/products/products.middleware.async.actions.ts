import { getProducts } from "../../services/products.service";
import {
  ActionTypeT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ActionWithPayload,
  ActionWithoutPayload,
} from "../actions.constants";
import { getProductsSuccees, getProductsFailure } from "./products.actions";

async function fetchProducts(nextFunction: any) {
  try {
    const products = await getProducts();
    return nextFunction(getProductsSuccees(products));
  } catch (error) {
    // add side effect handler
    return nextFunction(getProductsFailure());
  }
}

export { fetchProducts };
