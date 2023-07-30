import totalAmount from "../totalAmount/totalAmount.reducer";
import { useDispatch } from "react-redux";

// const dispatch = useDispatch();

function addItem(items: Array<ItemT>, data: ItemT) {
  let updatedItems = [...items];
  const indexOfExsistingItem = items.findIndex((item: any) => {
    return item.id === data.id;
  });
  if (indexOfExsistingItem >= 0) {
    updatedItems[indexOfExsistingItem] = {
      ...items[indexOfExsistingItem],
      amount: items[indexOfExsistingItem].amount + 1,
    };
  } else {
    updatedItems = [...items, data];
  }
  //   dispatch({
  //     type: "INCREASE_AMOUNT",
  //     data: { price: data.price, amount: data.amount },
  //   });
  // should I use store.dispatch instead? Could not be used useDispatch outside React component or custom hook
  return updatedItems;
}

function removeItem(items: Array<ItemT>, data: ItemT) {
  let updatedItems = [...items];
  const indexOfExsistingItem = items.findIndex((item: any) => {
    return item.id === data.id;
  });
  if (indexOfExsistingItem >= 0) {
    const itemAmount = updatedItems[indexOfExsistingItem].amount;
    if (itemAmount > 1) {
      updatedItems[indexOfExsistingItem].amount -= 1;
    } else {
      updatedItems = updatedItems.filter((item) => item.id !== data.id);
    }
    return updatedItems;
  }
  return items;
}

type ActionTypeT = "ADD" | "REMOVE";

type ItemT = { id: string; name: string; amount: number; price: number };

type ActionT = {
  type: ActionTypeT;
  data: ItemT;
};

const items = function (state: Array<ItemT> = [], action: ActionT) {
  switch (action.type) {
    case "ADD":
      return addItem(state, action.data);
    case "REMOVE":
      return removeItem(state, action.data);
    default:
      return state;
  }
};

export default items;
