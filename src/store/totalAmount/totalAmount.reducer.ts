import { DataT } from "./totalAmount.types";
import { AmountActionT } from "./totalAmount.types";
import * as C from "./totalAmount.constants";

function changeAmount(totalAmount: number, data: DataT, increase: boolean) {
  // consider passing only nessesary parts of action object
  return increase
    ? totalAmount + data.price * data.amount
    : totalAmount - data.price * data.amount;
} // remove all logic from reducer

const totalAmount = function (state = 0, action: AmountActionT) {
  switch (action.type) {
    case C.INCREASE_AMOUNT:
      return changeAmount(state, action.data, true);
    case C.DECREASE_AMOUNT:
      return changeAmount(state, action.data, false);
    default:
      return state;
  }
};

export default totalAmount;
