import { useState } from "react";

import Header from "src/components/Layout/Header";
import Cart from "src/components/Cart/Cart";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = function () {
  const [isCartOpened, setCartOpen] = useState(false);

  const onClose = () => {
    setCartOpen(false);
  };

  const onOpen = () => {
    setCartOpen(true);
  };
  return (
    <>
      {isCartOpened && <Cart handleClose={onClose} />}
      <Header handleOpen={onOpen} />
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
