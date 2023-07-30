export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

function updateP(products: Array<ProductType>) {
  return products;
}

type ActionTypeT = "GET_PRODUCTS" | "GET_PRODUCTS_SUCCESS";

type ActionT = {
  type: ActionTypeT;
  data?: any; // come back to this
};

const products = function (state: Array<ProductType> = [], action: ActionT) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return state;
    case "GET_PRODUCTS_SUCCESS":
      return updateP(action.data);
    default:
      return state;
  }
};

export default products;
