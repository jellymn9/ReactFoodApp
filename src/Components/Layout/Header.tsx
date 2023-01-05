import { HeaderStyle, FoodImage } from './Header.styled'
// import FoodImage from '../../assets/spaghetti.jpg'
import HeaderBtn from './HeaderBtn'

const Header = function () {
  return (
    <>
      <HeaderStyle>
        <h1>ReactMeals</h1>
        <HeaderBtn />
      </HeaderStyle>
      <FoodImage />
    </>
  )
}

export default Header
