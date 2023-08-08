import * as C from "../actions.constants";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

function updateP(products: Array<ProductType>) {
  return products;
}

type ActionTypeT =
  | "GET_PRODUCTS"
  | "GET_PRODUCTS_SUCCESS"
  | "GET_PRODUCTS_FAILURE";

type ActionT = {
  type: ActionTypeT;
  data?: any; // come back to this
};

const products = function (state: Array<ProductType> = [], action: ActionT) {
  switch (action.type) {
    case C.GET_PRODUCTS:
      return state;
    case C.GET_PRODUCTS_FAILURE:
      return state;
    case C.GET_PRODUCTS_SUCCESS:
      return updateP(action.data); // no need for function
    default:
      return state;
  }
};

export default products;
