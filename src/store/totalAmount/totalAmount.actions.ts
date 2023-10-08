import * as T from "./totalAmount.types";
import * as C from "./totalAmount.constants";

export const increaseAmount = (payload: T.DataT): T.IncreaseAmount => ({
  type: C.INCREASE_AMOUNT,
  data: payload,
});

export const decreaseAmount = (payload: T.DataT): T.DecreaseAmount => ({
  type: C.DECREASE_AMOUNT,
  data: payload,
});
