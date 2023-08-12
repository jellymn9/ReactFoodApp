import * as C from "./totalAmount.constants";
import { IActionWithPayload } from "../types";

export type DataT = { price: number; amount: number };

export interface IncreaseAmount
  extends IActionWithPayload<typeof C.INCREASE_AMOUNT, DataT> {}

export interface DecreaseAmount
  extends IActionWithPayload<typeof C.DECREASE_AMOUNT, DataT> {}

export type AmountActionT = IncreaseAmount | DecreaseAmount;
