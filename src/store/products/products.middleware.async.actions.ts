import { getProducts } from "../../services/products.service";
import * as T from "./product.types";
import { getProductsSuccees, getProductsFailure } from "./products.actions";

async function fetchProducts(
  nextFunction: (action: T.getProductsFailure | T.getProductsSuccess) => unknown
) {
  try {
    const products = await getProducts();
    return nextFunction(getProductsSuccees(products));
  } catch (error) {
    // add side effect handler
    return nextFunction(getProductsFailure());
  }
}

export { fetchProducts };
