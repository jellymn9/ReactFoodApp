import { getProducts } from "../../services/products.service";

async function fetchProducts(nextFunction) {
  const products = await getProducts();
  return nextFunction({ type: "GET_PRODUCTS_SUCCESS", data: products });
  // include Failure action too
}

export { fetchProducts };
