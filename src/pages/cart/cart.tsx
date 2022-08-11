import { useContext } from "react";
import { CartContext } from "../../common/context/CartProvider";
import { Cart as CartComponent } from "../../components/organism/Cart";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

function Cart() {
  const navigate = useNavigate();
  const { items, total, updateQuantity, removeItem, clearCart } =
    useContext(CartContext);

  const checkout = () => {
    console.info("Simulating the CHECKOUT");
    console.table(items);
    clearCart();
    navigate("/");
  };

  return (
    <CartWrapper>
      <CartComponent
        checkout={checkout}
        {...{ items, total, updateQuantity, removeItem }}
      />
    </CartWrapper>
  );
}

export default Cart;
