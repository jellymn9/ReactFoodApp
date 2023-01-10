import CartIcon from '../Cart/CartIcon'
import { CartBtn } from '../Layout/Header.styled'

const HeaderBtn = function (props: {handleOpen: () => void}) {
  return (
    <CartBtn onClick={() => props.handleOpen()}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </CartBtn>
  )
}

export default HeaderBtn
