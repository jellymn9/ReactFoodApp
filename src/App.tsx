import React, { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [isCartOpened, setCartOpen] = useState(false);

  const onClose = () => {
    setCartOpen(false);
  };

  const onOpen = () => {
    setCartOpen(true);
  };

  return (
    <div className="App">
      {isCartOpened && <Cart handleClose={onClose} />}
      <Header handleOpen={onOpen} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
