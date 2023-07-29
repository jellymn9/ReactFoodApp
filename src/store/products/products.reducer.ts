import { getProducts } from "../../services/products.service";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

async function fetchProducts(state: Array<ProductType>) {
  const products = await getProducts();
  console.log("products: ", products);
  if (products) {
    console.log("1");
    return products;
  }
  return state;
}

type ActionTypeT = "GET_PRODUCTS";

type ActionT = {
  type: ActionTypeT;
};

const products = async function (
  state: Array<ProductType> = [],
  action: ActionT
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return await fetchProducts(state);
    default:
      return state;
  }
};

export default products;
