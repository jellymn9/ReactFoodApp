import { IActionWithPayload } from "src/store/types";
import * as C from "./items.constants";

export type ItemT = { id: string; name: string; amount: number; price: number };

export interface IAddItem
  extends IActionWithPayload<typeof C.ADD_ITEM, ItemT> {}

export interface IRemoveItem
  extends IActionWithPayload<typeof C.REMOVE_ITEM, ItemT> {}

export type ItemActionT = IAddItem | IRemoveItem;
