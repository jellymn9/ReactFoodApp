import { HeaderStyle, FoodImage } from "./Header.styled";
import HeaderBtn from "./HeaderBtn";

const Header = function (props: { handleOpen: () => void }) {
  return (
    <>
      <HeaderStyle>
        <h1>ReactMeals</h1>
        <HeaderBtn handleOpen={props.handleOpen} />
      </HeaderStyle>
      <FoodImage />
    </>
  );
};

export default Header;
