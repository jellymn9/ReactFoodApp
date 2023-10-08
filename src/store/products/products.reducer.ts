import { ProductActionT, ProductType } from "./product.types";
import * as C from "./products.constants";

const products = function (
  state: Array<ProductType> = [],
  action: ProductActionT
) {
  switch (action.type) {
    case C.GET_PRODUCTS:
      return state;
    case C.GET_PRODUCTS_FAILURE:
      return state;
    case C.GET_PRODUCTS_SUCCESS:
      return action.data;
    default:
      return state;
  }
};

export default products;
