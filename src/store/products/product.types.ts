import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../actions.constants";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

//try add supertype so type must be string
interface IActionWithPayload<ActionType, PayloadType> {
  type: ActionType;
  data: PayloadType;
}

interface IAction<ActionType> {
  type: ActionType;
}

export interface getProducts extends IAction<typeof GET_PRODUCTS> {}
export interface getProductsSuccess
  extends IActionWithPayload<typeof GET_PRODUCTS_SUCCESS, Array<ProductType>> {}
export interface getProductsFailure
  extends IAction<typeof GET_PRODUCTS_FAILURE> {}

export type ProductActionT =
  | getProducts
  | getProductsSuccess
  | getProductsFailure;
