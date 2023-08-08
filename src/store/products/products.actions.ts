import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "./products.constants";
import { ProductType } from "./products.reducer";
import { ActionWithPayload, ActionWithoutPayload } from "../types";

export const getProductsRequest: ActionWithoutPayload = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccees: ActionWithPayload<Array<ProductType>> = (
  payload
) => ({
  type: GET_PRODUCTS_SUCCESS,
  data: payload,
});

export const getProductsFailure: ActionWithoutPayload = () => ({
  type: GET_PRODUCTS_FAILURE,
});
