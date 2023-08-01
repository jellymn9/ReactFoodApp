import { Card, Offset } from "../UI/GlobalStyle.styled";
import MealItem from "./MealItem/MealItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StateType } from "../../store/index";
import { ProductType } from "../../store/products/products.reducer";

const AvailableMeals = function () {
  const dispatch = useDispatch();
  const products = useSelector<StateType, ProductType[]>(
    (state) => state.products
  );

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS" });
  }, []);

  return (
    <section>
      <Card>
        {products && (
          <ul>
            {products.map((product) => (
              <>
                <MealItem
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
                <Offset />
              </>
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
