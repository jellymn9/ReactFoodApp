import { IAction, IActionWithPayload } from "src/store/types";
import * as C from "./products.constants";

export type ProductType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export interface getProducts extends IAction<typeof C.GET_PRODUCTS> {}

export interface getProductsSuccess
  extends IActionWithPayload<
    typeof C.GET_PRODUCTS_SUCCESS,
    Array<ProductType>
  > {}

export interface getProductsFailure
  extends IAction<typeof C.GET_PRODUCTS_FAILURE> {}

export type ProductActionT =
  | getProducts
  | getProductsSuccess
  | getProductsFailure;
