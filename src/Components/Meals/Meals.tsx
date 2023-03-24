import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Header from "../Layout/Header";
import Cart from "../Cart/Cart";
import { useState } from "react";

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
