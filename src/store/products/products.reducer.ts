import { getProducts } from "../../services/products.service";

type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

async function fetchProducts(state: Array<ProductType>) {
  const products = await getProducts();
  console.log("products: ", products);
  if (products) {
    return products;
  }
  return state;
}

type ActionTypeT = "GET_PRODUCTS";

type ActionT = {
  type: ActionTypeT;
};

const products = function (state = [], action: ActionT) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return fetchProducts(state);
    default:
      return state;
  }
};

export default products;
