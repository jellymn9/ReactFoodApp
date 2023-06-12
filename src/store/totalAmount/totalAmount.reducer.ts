function changeAmount(totalAmount: number, data: DataT, increase: boolean) {
  // consider passing only nessesary parts of action object
  return increase
    ? totalAmount + data.price * data.amount
    : totalAmount - data.price * data.amount;
}

type ActionTypeT = "INCREASE_AMOUNT" | "DECREASE_AMOUNT";

type DataT = { price: number; amount: number };

type ActionT = {
  type: ActionTypeT;
  data: DataT;
};

const totalAmount = function (state = 0, action: ActionT) {
  switch (action.type) {
    case "INCREASE_AMOUNT":
      return changeAmount(state, action.data, true);
    case "DECREASE_AMOUNT":
      return changeAmount(state, action.data, false);
    default:
      return state;
  }
};

export default totalAmount;
