import CartIcon from '../Cart/CartIcon'
import { CartBtn } from '../Layout/Header.styled'

const HeaderBtn = function () {
  return (
    <CartBtn>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </CartBtn>
  )
}

export default HeaderBtn
