import { ProductActionT } from "./products/product.types";
import { ItemActionT } from "./items/items.types";
import { AmountActionT } from "./totalAmount/totalAmount.types";

export type ActionTypeT = ProductActionT | ItemActionT | AmountActionT;
