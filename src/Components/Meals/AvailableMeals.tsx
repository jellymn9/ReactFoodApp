import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StateType } from "src/store/index";
import { ProductType } from "src/store/products/product.types";
import { getProductsRequest } from "src/store/products/products.actions";
import { Card, Offset } from "src/components/UI/GlobalStyle.styled";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = function () {
  const dispatch = useDispatch();
  const products = useSelector<StateType, ProductType[]>(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductsRequest());
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
