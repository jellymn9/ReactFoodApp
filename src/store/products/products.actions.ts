import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "./products.constants";
import * as T from "./product.types";

export const getProductsRequest = (): T.getProducts => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccees = (
  payload: Array<T.ProductType> // try to change this
): T.getProductsSuccess => ({
  type: GET_PRODUCTS_SUCCESS,
  data: payload,
});

export const getProductsFailure = (): T.getProductsFailure => ({
  type: GET_PRODUCTS_FAILURE,
});
