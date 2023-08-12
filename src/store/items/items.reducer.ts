import totalAmount from "../totalAmount/totalAmount.reducer";
import * as T from "./items.types";
import * as C from "./items.constants";

// const dispatch = useDispatch();

function addItem(items: Array<T.ItemT>, data: T.ItemT) {
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

function removeItem(items: Array<T.ItemT>, data: T.ItemT) {
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

const items = function (state: Array<T.ItemT> = [], action: T.ItemActionT) {
  switch (action.type) {
    case C.ADD_ITEM:
      return addItem(state, action.data); // move all login from reducer
    case C.REMOVE_ITEM:
      return removeItem(state, action.data); // move all login from reducer
    default:
      return state;
  }
};

export default items;
