import styled from "styled-components";
import SpaggetiImage from "src/assets/spaghetti.jpg";

export const HeaderStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: chocolate;
`;

export const FoodImage = styled.div`
  background-image: url(${SpaggetiImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 200px;
`;

export const CartBtn = styled.button`
  border-radius: 5%;
  background-color: #99b1c6;
  border-color: #d8dadc;
`;
