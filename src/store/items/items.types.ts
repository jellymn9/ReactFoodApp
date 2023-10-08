import * as C from "./items.constants";
import { IActionWithPayload } from "../types";

export type ItemT = { id: string; name: string; amount: number; price: number };

export interface IAddItem
  extends IActionWithPayload<typeof C.ADD_ITEM, ItemT> {}

export interface IRemoveItem
  extends IActionWithPayload<typeof C.REMOVE_ITEM, ItemT> {}

export type ItemActionT = IAddItem | IRemoveItem;
