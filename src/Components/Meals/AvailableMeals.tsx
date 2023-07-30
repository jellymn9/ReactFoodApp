import { Card, Offset } from "../UI/GlobalStyle.styled";
import MealItem from "./MealItem/MealItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { StateType } from "../../store/index";
import { ProductType } from "../../store/products/products.reducer";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A German specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 26.5,
  },
];

const AvailableMeals = function () {
  const dispatch = useDispatch();
  const products = useSelector<StateType, ProductType[]>(
    (state) => state.products
  );
  console.log("P: ", products);

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
