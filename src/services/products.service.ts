import { ProductType } from "../store/products/products.reducer";

const url = new URL("https://641ec6d6ad55ae01ccafadc3.mockapi.io/products");

export const getProducts = (): Promise<ProductType[]> => {
  return fetch(url, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        // console.log(res.json());
        return res.json();
      } else {
        return new Error("Products do not exist!");
      }
      // handle error
    })
    .catch((error) => {
      // handle error
      console.log("error: ", error);
      return error;
    });
};
