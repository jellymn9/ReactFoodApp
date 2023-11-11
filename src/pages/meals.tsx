import { useState } from "react";

import Header from "src/components/Layout/Header";
import Cart from "src/components/Cart/Cart";
import MealsSummary from "src/components/Meals/MealsSummary";
import AvailableMeals from "src/components/Meals/AvailableMeals";

const MealsPage = function () {
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

export default MealsPage;
