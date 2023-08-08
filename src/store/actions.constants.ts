export const INCREASE_AMOUNT = "INCREASE_AMOUNT";
export const DECREASE_AMOUNT = "DECREASE_AMOUNT";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
export const ADD = "ADD";
export const REMOVE = "REMOVE";

// type test = "bla" | "BLA";
export type ActionTypeT =
  | typeof INCREASE_AMOUNT
  | typeof DECREASE_AMOUNT
  | typeof GET_PRODUCTS
  | typeof GET_PRODUCTS_SUCCESS
  | typeof ADD
  | typeof REMOVE
  | typeof GET_PRODUCTS_FAILURE;

export type ActionWithPayload = {
  type: ActionTypeT;
  data: any; // change later
};

export type ActionWithoutPayload = {
  type: ActionTypeT;
};
