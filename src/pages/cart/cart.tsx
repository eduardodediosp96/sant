import { useContext } from "react";
import { CartContext } from "../../common/context/CartProvider";
import { Cart as CartComponent } from "../../components/organism/Cart";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

function Cart() {
  const { items, total, updateQuantity, removeItem } = useContext(CartContext);
  return (
    <CartWrapper>
      <CartComponent {...{ items, total, updateQuantity, removeItem }} />
    </CartWrapper>
  );
}

export default Cart;
