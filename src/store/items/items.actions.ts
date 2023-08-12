import * as T from "./items.types";
import * as C from "./items.constants";

export const addItem = (payload: T.ItemT): T.IAddItem => ({
  type: C.ADD_ITEM,
  data: payload,
});

export const removeItem = (payload: T.ItemT): T.IRemoveItem => ({
  type: C.REMOVE_ITEM,
  data: payload,
});
